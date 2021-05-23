## Розробка ПЗ
В цьому файлі розписано поетапне створення застосунку.
### 1.	Розробка ідеї для застосунку
    Розробка та обговорення ідеї створення застосунку для тестування з англійської мови.
### 2.	Планування розробки, розподіл роботи на учасників проєкту.
#### Розподіл роботи між учасниками:
    Хоменко Олег: backend, frontend, database, unit tests.
    Поморова Марія: frontend, database, unit tests, макети застосунку.
    Гайдукевич Марія: frontend, database, unit tests, макети застосунку.
### 3.	Створення angular-проєкту.
#### Установка і перший запуск Angular
    Angular застосовується для створення односторінкових додатків - SPA (Single Page Applications).

    Angular створює рендер програми, на відміну від підходу, коли весь контент завантажений в DOM, а JavaScript його змінює.

    Для того, щоб запустити додаток потрібно:

    1. Встановити останню версію node.js з сайту:
[NodeJS](https://nodejs.org/en/)
    
    2. Встановити або оновити npm: [sudo] npm install -g npm (sudo потрібно тільки на Mac / Linux).
    3. Встановити angular-cli: [sudo] npm install -g @ angular / cli

    Якщо у Вас раніше був встановлений angular-cli, то рекомендуємо його оновити:

    [Sudo] npm uninstall -g angular-cli @ angular / cli

    npm cache clean

    [Sudo] npm install -g @ angular / cli

    4. У консолі запустити команду ng new my-first-app для створення нашого проекту на Angular.
    5. Перейти в директорію проекту і запустити сервер:

    cd my-first-app

    ng serve

    6. Сервер за замовчуванням буде доступний по localhost: 4200, поміняти порт можна запустивши ng serve з параметром: ng serve --port YOURPORT

### 4.	Створення бази даних (JawsDB MySQL).
    4.1. Створення таблиць:
	  •	articles
	  •	future_simple
	  •	past_simple
	  •	present_simple
	  •	users
    4.2. Занесення даних в таблиці.
### 5.	Створення flask-проєкту.
    pip install flask
    
    Мінімальна flask-програма:
    
    from flask import Flask
    app = Flask(name)

    @app.route('/')
    def hello_world():
        return 'Hello World!'

    if name == 'main':
        app.run()
### 6.	Написання серверу і його зв‘язку з БД.
### 7.	Створення angular-компонентів
    7.1. Створення реєстраційної форми та форми авторизації.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/F6CE6B00-2593-4A7A-84B6-E3342AF1AE37.png)
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/4B741A73-0F02-478C-8BF2-63BC19EA31EC.png)
   
    7.2. Створення головної сторінки.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/F9BDDBB2-2DC8-4B13-AD98-6922156D6FF7.png)
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/B82D1C39-5BF6-49F7-8B0E-75FF2DCA6BD0.png)

    7.3. Реалізація зміни головної сторінки після авторизації користувача.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/4AEEECE0-1A12-4D10-9D5F-4CFB5BE3EB06.png)

    7.4. Реалізація захищеної авторизації з використанням jwt-бібліотеки.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/CAA31E54-EC26-414F-B7C6-C683A996ACCF.png)
    
    7.5. Створення сторінки з переліком тестів.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/595DF5C1-55E5-4939-9971-A0CA96DEF692.png)
    
    7.6. Створення сторінок з тестами.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/A56F0E45-8811-4C51-924F-424A9A411B4D.png)
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/DDA2E2C4-9B15-4064-94BC-923A120E180F.png)
    
    7.7. Додавання форми зворотнього зв‘язку на головній сторінці.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/2D4D6A66-05C0-483E-BBB4-52BEC37411C7.png)

### 8.	Backend 
    8.1. Реалізація відправки feedback-у на електронну пошту модератора.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/3A734603-2CCD-4156-96C8-4A23B078B3DC.png)
    
    8.2. Реалізація шифрування даних користувача за допомогою jwt-бібліотеки.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/CF5C610F-7F66-46FF-B69B-791E97564BC3.png)
    
    8.3. Перевірка тестових завдань.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/5B396AF1-7E65-4BCB-A30D-202C337561D1.png)
### 9.	Написання юніт-тестів для запитів в БД.
![](https://github.com/Oleh-Khomenko/Tryeng/blob/main/docs/images/77312545-6F72-44AD-BE70-785ACF692DF5.png)
### 10.	Збірка проєкту.
### 11.	Виставлення проєкту на github .
