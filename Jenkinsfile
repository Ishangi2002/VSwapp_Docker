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
                sh "docker build -t ${BACKEND_IMAGE} ./vswapp-backend"

                echo 'Building frontend image...'
                sh "docker build -t ${FRONTEND_IMAGE} ./vswapp-frontend"
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                echo 'Logging in to Docker Hub...'
                withCredentials([usernamePassword(credentialsId: "${DOCKERHUB_CREDS}", usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
                    // Using Personal Access Token as password
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
    success {
        // Only clean up dangling (nameless) images, not EVERYTHING
        sh 'docker image prune -f'
        echo '🎉 Deployment Successful! App is running.'
    }
    failure {
        echo '❌ Deployment Failed. Check logs above.'
    }
 }
}