# Installation and Setup

1. cd docker_compose/
2. `docker-compose up --build -d`
3. ..cd spring_mysql/
4. cd backend/
   3a. -- if running Linux/Mac chmod +x gradlew
   3b. run ./gradlew build
   3c. windows ./gradlew.bat build
5. run ./gradlew bootRun

# Testing

1. Open Intellij
2. If prompted, Import project [project name]
3. Click add configuration in top right
   Format: ![Alt Branches](https://i.imgur.com/ytA784e.png)
4. Click plus in configuartion window
   Format: ![Alt Branches](https://i.imgur.com/qzE06xU.png)
5. Select Junit Configuration
   Format: ![Alt Branches](https://i.imgur.com/Y6V5eER.png)
6. Name Package
7. From Build and Run section select backend.test from dropdown box
   Format: ![Alt Branches](https://i.imgur.com/aTjMbFC.png)
8. Select class SampleControllerTest
   Format: ![Alt Branches](https://i.imgur.com/3PnXti5.png)
   Format: ![Alt Branches](https://i.imgur.com/VQDoKU6.png)
9. Click Ok
   Format: ![Alt Branches](https://i.imgur.com/ByC06e3.png)
10. From top IDE select run backend test with converage.
    Format: ![Alt Branches](https://i.imgur.com/MisoHm8.png)
11. View Test Coverage
    Format: ![Alt Branches](https://i.imgur.com/W049AU6.png)
