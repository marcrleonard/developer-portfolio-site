import requests
import json

class gitHub:
    def __init__(self):
        self.so_user_id = 'marcrleonard'

    def get_starred(self):
        url = 'https://api.github.com/users/{}/starred'.format(self.so_user_id)
        r = requests.get(url)
        # print(r)
        # print(r.elapsed)
        print(r.text)

        response = json.loads(r.text)
        return response
        # print(json.dumps(response, indent=4))



if __name__ == '__main__':
    s = gitHub()
    s.get_starred()