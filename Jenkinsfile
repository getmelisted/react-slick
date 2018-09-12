pipeline {
  agent {
    docker {
      image 'node:8.11'
      registryUrl 'https://index.docker.io/v1/'
      registryCredentialsId 'no-credentials'
    }
  }
  options {
    disableConcurrentBuilds()
    ansiColor('xterm')
    timeout(time: 60, unit: 'MINUTES')
  }
  environment {
    def NPM_CONFIG_CACHE = '/tmp/npm'
    def info = repoInfo()
    def ARTIFACTORY_REPO = 'sweetiq-node'
    def REPORT_FILE= 'junit_report.xml'
    def BABEL_CACHE_PATH = './.babel.json' 
    def IS_MASTER_BRANCH_JOB = BRANCH_NAME.equals('master')
    def IS_PR_JOB = BRANCH_NAME.startsWith('PR-')
  }
  stages {
    stage('install dependencies') {
      steps {
        sh 'npm i'
      }
    }
    stage('test') {
      steps {
        sh 'npm test'
      }
    }
    // stage('publish') {

    // }
  }
}