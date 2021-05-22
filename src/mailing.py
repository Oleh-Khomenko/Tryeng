import smtplib
from malingUserData import *


def sendEmail(subject, body):
    with smtplib.SMTP('smtp.gmail.com', '587') as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(EMAIL, PASSWORD)

        msg = f'Subject: {subject}\n\n{body}'

        smtp.sendmail(EMAIL, EMAIL, msg)