
FROM  openjdk:17-jdk-alpine

WORKDIR /app

COPY target/chat-0.0.1-SNAPSHOT.jar /app/email-writer.jar

EXPOSE 8080

CMD [ "java","-jar","/app/email-writer.jar" ]
