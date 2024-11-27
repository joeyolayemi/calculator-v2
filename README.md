
# Simple Calculator App

This is a simple calculator using HTML, CSS and JavaScript. It also comes with a server version that can be installed using Apache Tomcat.


## Tomcat Deployment

To deploy this project follow the steps below.

**Step 1:** Clone repo to your server

```bash
  git clone https://github.com/joeyolayemi/calculator-v2.git
```

**Step2:** change directory to the cloned folder, then build using Maven

```bash
  cd calculator-v2/
  mvn clean package
```
**Step3:** Change directory to target rename file suing the mv command. This step is optional

```bash
  cd target/
```
```bash
  mv <filename> <newFilename>
```
**Step 4:** Copy file into Tomcat folder 

```bash
  sudo cp <filename>.war /opt/tomcat/webapps
```
Open a web browser and go to
```bash
http://<yourIPaddress>:8080/filename
```
You can find the IP address of your machine with the following command
```bash
    curl ipconfig.io
```


## Tech Stack

**Server:** Apache Tomcat, Maven

