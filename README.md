# Installation and Setup

1. cd docker_compose/
2. `docker-compose up --build -d`
3. ..cd spring_mongo/
4. cd backend/
   3a. -- if running Linux/Mac chmod +x gradlew
   3b. run ./gradlew build
   3c. windows ./gradlew.bat build
5. run ./gradlew bootRun

# Testing

1. Open Intellij
2. If prompted, Import project [project name]
3. Click add configuration in top right
   Format: ![Alt Text](https://imgur.com/ytA784e)
4. Click plus in configuartion window
   Format: ![Alt Text](https://imgur.com/qzE06xU)
5. Select Junit Configuration
   Format: ![Alt Text](https://imgur.com/Y6V5eER)
6. Name Package
7. From Build and Run section select backend.test from dropdown box
   Format: ![Alt Text](https://imgur.com/aTjMbFC)
8. Select class SampleControllerTest
   Format: ![Alt Text](https://imgur.com/3PnXti5)
   Format: ![Alt Text](https://imgur.com/VQDoKU6)
9. Click Ok
   Format: ![Alt Text](https://imgur.com/ByC06e3)
10. From top IDE select run backend test with converage.
    Format: ![Alt Text](https://imgur.com/MisoHm8)
11. View Test Coverage
    Format: ![Alt Text](https://imgur.com/W049AU6)
