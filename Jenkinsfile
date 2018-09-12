pipeline {
  agent {
    docker {
      image 'node:8.11'
      registryUrl 'https://index.docker.io/v1/'
      registryCredentialsId 'no-credentials'
    }
  }
  stages {
    stage('install dependencies') {
      steps {
        sh 'npm i -g npm && npm i'
      }
    }
    // stage('test') {
    //   steps {
    //     sl 'npm test'
    //   }
    // }
    // stage('publish') {

    // }
  }
}