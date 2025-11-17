pipeline {
    agent any

    environment {
        DOCKERHUB_CREDS = 'dockerhub-creds'  
        DOCKERHUB_USER  = 'ishangi1120'      
        BACKEND_IMAGE   = "${DOCKERHUB_USER}/vswapp-backend:latest"
        FRONTEND_IMAGE  = "${DOCKERHUB_USER}/vswapp-frontend:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
                
            }
        }

        stage('Build Docker Images') {
            steps {
                
                echo 'Building backend image...'
                sh 'docker build -t backend-image ./vswapp-backend'

                echo 'Building frontend image...'
                sh 'docker build -t frontend-image ./vswapp-frontend'
            }
        }

        stage('Tag Docker Images') {
            steps {
                echo 'Tagging backend image...'
                sh "docker tag backend-image ${BACKEND_IMAGE}"

                echo 'Tagging frontend image...'
                sh "docker tag frontend-image ${FRONTEND_IMAGE}"
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                echo 'Logging in to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: "${DOCKERHUB_CREDS}", usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
                    sh 'echo $DH_PASS | docker login -u $DH_USER --password-stdin'
                    echo 'Pushing backend image...'
                    sh "docker push ${BACKEND_IMAGE}"
                    echo 'Pushing frontend image...'
                    sh "docker push ${FRONTEND_IMAGE}"
                    sh 'docker logout'
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                
                echo 'Removing old containers if they exist...'
                sh 'docker-compose down || true'
                sh 'docker rm -f vswapp-backend-c vswapp-frontend-c || true'

                echo 'Deploying containers with Docker Compose...'
                sh 'docker-compose up -d --build'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up unused Docker images...'
            sh 'docker image prune -f'
            
            
            echo 'Stopping and removing containers...'
            sh 'docker-compose down || true'
        }
    }
}