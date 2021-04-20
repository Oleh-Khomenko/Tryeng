
# Моделі прецедентів:

![usecase](http://www.plantuml.com/plantuml/png/LL6nKi904EtlAswmfX1wXeuFSEXeCdXK66ToIMS1Hh1XXXbrA2pKJy1892CGVc7tZtnx7YHEYhntj--ztRskZOCeJcx6AXZ6jv5kq3ElUChtl6ZemEfUOcnyldkbaYTKkFkKCbhpewlgMnCffUIdcqdphkDrIYNM30DheFtW5toYd40tHyhIQQzwbxMgEHtumQNiJrM3KDCH1wNcAUK0cNJejIrzOSneP4mzwebdlAADvbGahbtAQS_fdwXV3tmNPvvHIHlwHjK13ImrwAVq2LhI5w87eNY8qzcbYgxStjnuXJJldK1psd9AErx0OYq6SAEjfWo5Hqa1sacq4nQObae1EFp19P1FR5V3AhTWMNP7DlYVjavFCGR5k9u9RddiI5jrJNYDn_y5)

![usecase](http://www.plantuml.com/plantuml/png/ZPBDIiDG48NtzoaktPTYshLqvyQT-02X3LBG2ht9Nbl4JK5nqOqByGr2VaZ8Jto5cJVoJDA698XqqtivdVdEkJEP6zVUkDx3lR8NxkD6Z-YJ3rHII04V-9ct8sqRVRrQttahuohb6MTX6mTrtxobW2f-eXZr9Rzf2B6q011Cy1FAlnDAo4TXH3wAzZNkvlQY0_f0QKG_04bTHhv6IrXJOuWLHBHIoY-wpz8u8YeaRvDL40W1LzuTZQoEqJkLwCXHdsXGKdXLa5fu9fsu2cadhloA58N-ymNJVrzGJoK19USz4ldDKCu9FElE-8jY8SakS0guTKa5ZUHLC_7XWx2FNcuH6eUhtkmfROdvQP4m0QSG2vpPiSrIwlGPZ9VZIrdYKB26mdGep1H4kID6UmLwxgoN-0X_0G00)

![usecase](http://www.plantuml.com/plantuml/png/VPAnJiCm48PtFuNLcGwqpAWy0s9ZYPeCI3H8JRgdYH1BfIA6YWNn2i4qYbKQFyD_hy2JS3vd259XyvtlliztoIpBesM-MjohQ9u_BFK8pzZZI3jqjACrbLIWfXAEYf6ECdqLB-vIfLPPCe-oXCjVqA6XDHfqtBBLtEqqFb2ZXVLHpHUM7lLjgldaO2J2mIDXHL71iEI9fKOarpVd0yCxv_Vo48kZuCJJmWZ2KSc93Hm-uIJzNRpIbWy7gjYAzgGCDSDihvlyCn3Z6sdarvtn4FuSr58YmtpvVR7VX9q5DXV_kOtUEnrutr27Ux4AlQMAqHiF3FxJapJUsnClb5BoZSRn-58MEOmclwBfCEBEMPB6_2Vy0000)



# Основні сценарії:

Сценарій №1

ID: UC.1

НАЗВА: Реєстрація

УЧАСНИКИ: Гість, Система

ПЕРЕДУМОВИ: Відстуні

РЕЗУЛЬТАТ: Неактивований обліковий запис

ВИКЛЮЧНІ СИТУАЦІЇ:

EХ.1 Обліковий запис зареєстрований на введну пошту вже існує

EХ.2 Повторно введений пароль не збігається

EХ.3 Не прийшов лист на пошту  

![usecase](http://www.plantuml.com/plantuml/png/fPDFJi9G4CRtdE85jyP4tLbZs7W7jnX1JHGCrbqN22Iw83On11AZCTpWYHHhIyiLPcxartbGAOAIsEGbVVFdDzDlfeLhkrYpRoulSWuzKSnrylcM6zoa0Mc-St9g-aXSUjjJz09_8ucc06yTHH5fXVU8OffGm4sLfnvf43tk2BC-fKeMktbBS0xrJKtoQ4pQMQX1Gw5pIveR0mjBoAwY3pWdA3P0IGydOjSGbt-9cWS_mXW3v2EWhP0UuWH9ZnGB2cN0vli4a2R2f2KYvFPcvgPC9zoGmf30-bMgzLLghw7IAtAHZ_9TPBiPjRxxg5JjaggTdvxPQgDSBk99NVl71ugUqT48ElY9D1dNuT7Mzg9X9pMKAYV2dk-eZpv1GJSFPZCyqecy1ewZOVFfK-7o1lsw58WPfjbSyR7MQYGo8XecOnUTMaBGHlu5ACuxnNDOYF9Znp0Qdq8pdD08BGkzR0lKR0Evnpq4eD1GciCKu1bbb_7Vqk-kLbfU_lnlgrTMhe1S_EHV)

Сценарій №2

ID: UC.2

НАЗВА: Активація облікового запису

УЧАСНИКИ: Гість, Система

ПЕРЕДУМОВИ: Створений неактивований обліковий запис

РЕЗУЛЬТАТ: Активований обліковий запис

ВИКЛЮЧНІ СИТУАЦІЇ:

Відсутні

ОСНОВНИЙ СЦЕНАРІЙ:

![usecase](http://www.plantuml.com/plantuml/png/XP11Ze9044NtdABFCMouoYGpknarYhjU2CJemaHZZ0iJOxn1G-o88725NpUoYZO4Lx0gglz_lwg2MVWz3UV_Vvx62JKja5D4CIN8O6YbFVN-MbttzwLmWMMrfILgt92pPwDGmIWqp5aBm-_hztHaNI49BVkWKBgm3zcPdsBfet2Y3XcniOJXHaLRvz6uEWGidZ2w3zfnLYnPb0YcHegIHoYuohZzKBWph16_FxXNfcG0WRWy1-09aJApWkrlqHQ3vnnFV2_u7VtmxLy0)

Сценарій №3

ID: UC.3

НАЗВА: Авторизація

УЧАСНИКИ: Система, користувач

ПЕРЕДУМОВИ: Відсутні

РЕЗУЛЬТАТ: Доступ до облікового запису

ВИКЛЮЧНІ СИТУАЦІЇ:

EХ.004 Відсутній обліковий запис

EХ.005 Невірний логін або пароль 

![usecase](http://www.plantuml.com/plantuml/png/ZPBFIiD04CRlUOgXtZtfnOZquZjuhTYgeAtKUCiXjegNGg183gA8-08nDfh-oUOLldaZFrQRcbB_B0HcPsP_-tsPhPzxZQvtSNhY-BY3qG2PNcfF-qWGwutloDUoVULkI_30UW_ineJHhI17B8np61IOQ5zg6EgrHXZLN7lGnzCd7IbcYFqb6aQMerTMnem0PgOQ2jvPB8XD24_vvHhEYQiqotVma4b3KCQ6WM3ApIirvQAH41hpjE4j0_TNRrLRpqY862jR_c7j4Qa6pFEC1XfMB2vkRNUyfdIF3uyyMMkr6bnbQNj_Ht0FWpVApq0_bTBktlh6ScApJ3JR1vQzIX4dXe9HJ2P_T3b4WnVk8xesh6GOpqT0Yml5FmH_lgFEcUlKAOkFxWC0)

Сценарій №4 

ID: UC.4

НАЗВА: Відправка запиту 

УЧАСНИКИ: Користувач, система

ПЕРЕДУМОВИ: Наявність запиту

РЕЗУЛЬТАТ: Збір інформації

ВИКЛЮЧНІ СИТУАЦІЇ:

EX.6 Користувач не відправив запит


ОСНОВНИЙ СЦЕНАРІЙ:

![usecase]()


Сценарій №5

ID: UC.5

НАЗВА: Перевірка запиту

УЧАСНИКИ: Адміністратор, система

ПЕРЕДУМОВИ: Наявність змістовного запиту

РЕЗУЛЬТАТ: Інформація передається редактору

ВИКЛЮЧНІ СИТУАЦІЇ:

EX.6 Користувач відправив запит, що не містить змісту

ОСНОВНИЙ СЦЕНАРІЙ:

![usecase]()


Сценарій №6

ID: UC.6

НАЗВА: Адміністратор передає редактору запит

УЧАСНИКИ: Адміністратор, редактор

ПЕРЕДУМОВИ: Наявність даних

РЕЗУЛЬТАТ: Редактор приступить до обробки запиту

ВИКЛЮЧНІ СИТУАЦІЇ:

EX.6 Адміністратор не прийняв запит

ОСНОВНИЙ СЦЕНАРІЙ:


![usecase]()


Сценарій №7

ID: UC.7

НАЗВА: Редагування запиту

УЧАСНИКИ: Редактор, система

ПЕРЕДУМОВИ: Адміністратор надіслав запит

РЕЗУЛЬТАТ: Запит готовий до відправки у мережу

ВИКЛЮЧНІ СИТУАЦІЇ:

EX.6 Запит не потребує редагування

ОСНОВНИЙ СЦЕНАРІЙ:


![usecase]()


Сценарій №8

ID: UC.8

НАЗВА: Редагований запит передається адміністратору

УЧАСНИКИ: Редактор, адміністратор

ПЕРЕДУМОВИ: Запит був відредагований

РЕЗУЛЬТАТ: Запит передається у мережу

ВИКЛЮЧНІ СИТУАЦІЇ:

Відсутні

ОСНОВНИЙ СЦЕНАРІЙ:


![usecase]()



Сценарій №9

ID: UC.9

НАЗВА: Користувач отримує результат

УЧАСНИКИ: Адміністратор, користувач

ПЕРЕДУМОВИ: Наявність результату

РЕЗУЛЬТАТ: Проаналізований текст по результату запиту

ВИКЛЮЧНІ СИТУАЦІЇ:

EX.6 Користувач не отримав результат

![usecase]()




