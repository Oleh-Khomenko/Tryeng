import unittest
from database import *


class TestDB(unittest.TestCase):
    db = db_connect()
    user = {'email': 'test', 'password': 'test'}

    def test_getAllUsers(self):
        data = get_all(self.db, 'users')
        self.assertTrue(('olehhomenko12@gmail.com', '11111111') in data)

    def test_getAllArticles(self):
        data = get_all(self.db, 'articles')
        self.assertEqual(data, [(1, 'the'), (2, 'in nature'), (3, 'France'), (4, 'the Romans'), (5, 'fish'),
                                (6, 'an engineer'), (7, 'books'), (8, 'a sheet'), (9, 'the 31st'), (10, 'absolute')])

    def test_getAllFutureSimple(self):
        data = get_all(self.db, 'future_simple')
        self.assertEqual(data, [(1, 'will close'), (2, 'will suit'), (3, 'will have'), (4, 'Is she going to'),
                                (5, 'will get'), (6, 'will be'), (7, 'won`t go'), (8, 'will take care'),
                                (9, 'will pass'), (10, 'is going to put')])

    def test_getAllPresentSimple(self):
        data = get_all(self.db, 'present_simple')
        self.assertEqual(data, [(1, 'leaves'), (2, 'rises'), (3, 'dines'), (4, 'makes'), (5, 'Does Mary walk'),
                                (6, 'doesn`t belong'), (7, 'do you keep'), (8, 'don`t play'), (9, 'means'),
                                (10, 'Do you usually have')])

    def test_getAllPastSimple(self):
        data = get_all(self.db, 'past_simple')
        self.assertEqual(data, [(1, 'ran'), (2, 'had'), (3, 'did you spend'), (4, 'went'), (5, 'didn`t enjoy'),
                                (6, 'did you build'), (7, 'didn`t go out'), (8, 'could play'), (9, 'Did you visit'),
                                (10, 'slipped')])

    def test_insertUser(self):
        resp = insertUser(self.db, self.user)
        self.assertEqual(resp, 'ok')

    def test_deleteUser(self):
        resp = deleteUser(self.db, self.user)
        self.assertEqual(resp, 'ok')


if __name__ == '__main__':
    unittest.main()
