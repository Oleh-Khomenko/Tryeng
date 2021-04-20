
# Моделі прецедентів:

![usecase](http://www.plantuml.com/plantuml/png/LL6nKi904EtlAswmfX1wXeuFSEXeCdXK66ToIMS1Hh1XXXbrA2pKJy1892CGVc7tZtnx7YHEYhntj--ztRskZOCeJcx6AXZ6jv5kq3ElUChtl6ZemEfUOcnyldkbaYTKkFkKCbhpewlgMnCffUIdcqdphkDrIYNM30DheFtW5toYd40tHyhIQQzwbxMgEHtumQNiJrM3KDCH1wNcAUK0cNJejIrzOSneP4mzwebdlAADvbGahbtAQS_fdwXV3tmNPvvHIHlwHjK13ImrwAVq2LhI5w87eNY8qzcbYgxStjnuXJJldK1psd9AErx0OYq6SAEjfWo5Hqa1sacq4nQObae1EFp19P1FR5V3AhTWMNP7DlYVjavFCGR5k9u9RddiI5jrJNYDn_y5)



![usecase](http://www.plantuml.com/plantuml/png/ZPA_IiDG5CRt-nINpkrWsrcwkRY9MvRG1Yde5PfarnPnAIWENHp4DmZvGqAJfgzmpXlvdPiQOX1nkk7BER_lk-VScH-ugo2ykrNkFBXVwG6zyuuEb53CEtxazK2xlhvScfjmwGTAXRutTtqFTP-yffXgVg0CzGT-qH0oQG4W7Ze6HoB_XvfoYb2RKeIwhILUNPzrM6-eJUa8bjJjAPAMn88pY3L4j5B1JuxfqJIEb2e9tGGM29B0c3Sdgt77wXMSY4hKvngK0curf0uU0XY5PMt4cP-HfFhz5fC_Rs67auDIyXQPecOsZlb7vcbtrX-KMHHsWbF8hKqXR8IlcyaxfdyhRAORtGgDnyMF5L3HCijsfNG4fn8JdFjJsrYfxmSnMepEPPTzOTmN9drXgY3ADsAqdq3FFBF0S_m2)



![usecase](http://www.plantuml.com/plantuml/png/VPAnJiCm48PtFuNLcGwqpAWy0s9ZYPeCI3H8JRgdYH1BfIA6YWNn2i4qYbKQFyD_hy2JS3vd259XyvtlliztoIpBesM-MjohQ9u_BFK8pzZZI3jqjACrbLIWfXAEYf6ECdqLB-vIfLPPCe-oXCjVqA6XDHfqtBBLtEqqFb2ZXVLHpHUM7lLjgldaO2J2mIDXHL71iEI9fKOarpVd0yCxv_Vo48kZuCJJmWZ2KSc93Hm-uIJzNRpIbWy7gjYAzgGCDSDihvlyCn3Z6sdarvtn4FuSr58YmtpvVR7VX9q5DXV_kOtUEnrutr27Ux4AlQMAqHiF3FxJapJUsnClb5BoZSRn-58MEOmclwBfCEBEMPB6_2Vy0000)




# Основні сценарії:

Сценарій №1

ID: UC.1

НАЗВА: Реєстрація

УЧАСНИКИ: Гість, Система

ПЕРЕДУМОВИ: Відстуні

РЕЗУЛЬТАТ: Створений обліковий запис

ВИКЛЮЧНІ СИТУАЦІЇ:

EХ.1 Обліковий запис зареєстрований на введну пошту вже існує

EХ.2 Повторно введений пароль не збігається



ОСНОВНИЙ СЦЕНАРІЙ:

![usecase]()


Сценарій №2

ID: UC.3

НАЗВА: Авторизація

УЧАСНИКИ: Система, користувач

ПЕРЕДУМОВИ: Відсутні

РЕЗУЛЬТАТ: Доступ до облікового запису

ВИКЛЮЧНІ СИТУАЦІЇ:

EХ.3 Відсутній обліковий запис

EХ.4 Невірний логін або пароль 


ОСНОВНИЙ СЦЕНАРІЙ:

![usecase]()


Сценарій №3

ID: UC.5

НАЗВА: Відправка згенерованих завдань

УЧАСНИКИ: Лінгвіст, система

ПЕРЕДУМОВИ: Користувач вибрав завдання

РЕЗУЛЬТАТ: Завдання передається користувачеві

ВИКЛЮЧНІ СИТУАЦІЇ:
Відсутні

ОСНОВНИЙ СЦЕНАРІЙ:

![usecase]()

Сценарій №4 

ID: UC.5

НАЗВА: Проходження завдань користувачем

УЧАСНИКИ: Користувач, система

ПЕРЕДУМОВИ: Вхід у систему

РЕЗУЛЬТАТ: Збір інформації з тесту

ВИКЛЮЧНІ СИТУАЦІЇ:

EX.5 Користувач не відповів на всі завдання
EX.6 Користувач не відправив результат роботи



ОСНОВНИЙ СЦЕНАРІЙ:

![usecase]()


Сценарій №5

ID: UC.5

НАЗВА: Перевірка завдань

УЧАСНИКИ: Адміністратор, система

ПЕРЕДУМОВИ: Наявність виконаної роботи

РЕЗУЛЬТАТ: Інформація перевіряється на помилки

ВИКЛЮЧНІ СИТУАЦІЇ:

Відсутні

ОСНОВНИЙ СЦЕНАРІЙ:

![usecase]()


Сценарій №6

ID: UC.6

НАЗВА: Адміністратор передає результати роботи користувачеві

УЧАСНИКИ: Адміністратор, Користувач

ПЕРЕДУМОВИ: Наявність результату

РЕЗУЛЬТАТ: Користувач отримує результат роботи із вказаними помилками(якщо вони присутні)

ВИКЛЮЧНІ СИТУАЦІЇ:

EX.7 Користувач хоче звернутись до адміністратора із питанням по тесту
EX.8 Користувач не отримав результат

ОСНОВНИЙ СЦЕНАРІЙ:


![usecase]()

