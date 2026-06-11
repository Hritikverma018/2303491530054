const Log = async (stack, level, packageName, message) => {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJocml0aWt2ZXJtYTE0MDRAZ21haWwuY29tIiwiZXhwIjoxNzgxMTY0MDYwLCJpYXQiOjE3ODExNjMxNjAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJlNTliMWQyYi01N2U4LTQzYjAtOWFiNS05OGZkZTgwYWRiYWEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJocml0aWsgdmVybWEiLCJzdWIiOiI2NTg5M2JkZC1jYWMwLTQzZWItOTUyNC0xYjA1ODg0YjIxMjAifSwiZW1haWwiOiJocml0aWt2ZXJtYTE0MDRAZ21haWwuY29tIiwibmFtZSI6ImhyaXRpayB2ZXJtYSIsInJvbGxObyI6IjIzMDM0OTE1MzAwNTQiLCJhY2Nlc3NDb2RlIjoiQkFWRFNoIiwiY2xpZW50SUQiOiI2NTg5M2JkZC1jYWMwLTQzZWItOTUyNC0xYjA1ODg0YjIxMjAiLCJjbGllbnRTZWNyZXQiOiJQaEVleXRwR0Nydkp6aGRxIn0.jSrRUkfpbabGRlvCRItz0GmlNTExXpGmqYZ6I8sQ-2Q"
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message
        })
      }
    );

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error(error);
  }
};

module.exports = Log;