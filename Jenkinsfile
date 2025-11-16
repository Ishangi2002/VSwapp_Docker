pipeline {
    agent any

    environment {
        REGISTRY = "ishangi1120"
        BACKEND_IMAGE = "vswapp-backend"
        FRONTEND_IMAGE = "vswapp-frontend"
        DOCKERHUB_CREDENTIALS = "dockerhub-creds"  
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ishangi1120/your-repo.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh "docker build -t ${REGISTRY}/${BACKEND_IMAGE}:latest backend/"
                    sh "docker build -t ${REGISTRY}/${FRONTEND_IMAGE}:latest frontend/"
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS,
                                                      usernameVariable: 'USER',
                                                      passwordVariable: 'PASS')]) {

                        sh "echo $PASS | docker login -u $USER --password-stdin"

                        sh "docker push ${REGISTRY}/${BACKEND_IMAGE}:latest"
                        sh "docker push ${REGISTRY}/${FRONTEND_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                script {
                    sh 'docker rm -f vswapp-backend || true'
                    sh 'docker rm -f vswapp-frontend || true'

                    sh "docker pull ${REGISTRY}/${BACKEND_IMAGE}:latest"
                    sh "docker pull ${REGISTRY}/${FRONTEND_IMAGE}:latest"

                    sh "docker run -d --name vswapp-backend -p 8080:8080 ${REGISTRY}/${BACKEND_IMAGE}:latest"
                    sh "docker run -d --name vswapp-frontend -p 5173:5173 ${REGISTRY}/${FRONTEND_IMAGE}:latest"
                }
            }
        }
    }

    post {
        success { echo 'Pipeline Completed Successfully!' }
        failure { echo 'Pipeline Failed!' }
    }
}
