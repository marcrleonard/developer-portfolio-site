import requests
import json

class StackOverflow:
    def __init__(self):
        self.so_user_id = 6775715

    def get_favorites(self):
        url = 'https://api.stackexchange.com/2.2/users/{}/favorites?order=desc&sort=activity&site=stackoverflow'.format(self.so_user_id)
        r = requests.get(url)
        # print(r)
        # print(r.elapsed)
        # print(r.text)

        response = json.loads(r.text)
        return response
        # print(json.dumps(response, indent=4))



if __name__ == '__main__':
    s = StackOverflow()
    s.get_favorites()