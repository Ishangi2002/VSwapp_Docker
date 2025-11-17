pipeline {
    agent any

    environment {
        // Jenkins credentials ID (create this in Jenkins → Credentials)
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')

        FRONTEND_IMAGE = "ishangi1120/vswapp-frontend"
        BACKEND_IMAGE = "ishangi1120/vswapp-backend"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Ishangi2002/VSwapp_Docker.git'
            }
        }

        stage('Build Frontend') {
            steps {
                sh '''
                    cd frontend
                    npm install
                    npm run build
                '''
            }
        }

        stage('Build Backend') {
            steps {
                sh '''
                    cd backend
                    mvn clean package -DskipTests
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                    docker build -t ${FRONTEND_IMAGE}:latest ./frontend
                    docker build -t ${BACKEND_IMAGE}:latest ./backend
                '''
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh '''
                    echo "$DOCKERHUB_CREDENTIALS_PSW" | docker login -u "$DOCKERHUB_CREDENTIALS_USR" --password-stdin
                '''
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                sh '''
                    docker push ${FRONTEND_IMAGE}:latest
                    docker push ${BACKEND_IMAGE}:latest
                '''
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
