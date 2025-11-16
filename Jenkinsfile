pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "ishangi1120/vswapp-backend:latest"
        FRONTEND_IMAGE = "ishangi1120/vswapp-frontend:latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone public GitHub repo (no credentials needed)
                git url: 'https://github.com/ishangi1120/VSwapp_Docker.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Build backend image
                    sh "docker build -t $BACKEND_IMAGE ./backend"

                    // Build frontend image
                    sh "docker build -t $FRONTEND_IMAGE ./frontend"
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                // Use Docker Hub credentials to login
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', 
                                                  usernameVariable: 'DOCKER_USER', 
                                                  passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                sh "docker push $BACKEND_IMAGE"
                sh "docker push $FRONTEND_IMAGE"
            }
        }
    }

    post {
        always {
            // Logout from Docker
            sh "docker logout"
        }
    }
}
