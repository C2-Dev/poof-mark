from django.core.management.base import BaseCommand, CommandError
from fart.models import Fart, FartType
from django.contrib.auth.models import User
import logging
import random


class Command(BaseCommand):
    
    
    logger = logging.getLogger('poof.addSampleData')
    email_domain = 'fartmark.com'
    default_pw = 'trailBoss4Life'
    users = {}
    usernames = ['hughjanus', 'z3ke1r', 'tmart', 'admin']
    farts = {}
    fart_types = [
        'Simple toot',
        'Crop-dust',
        'SBD',
        'Bubbler',
        'Butthole burner',
        'Shart',
        'Spray fart',
        'Stinker',
        'Cheek Slapper',
        'Milky Garbage',
        'Queef'
    ]


    def handle(self, *args, **options):
        

        if options.get('quiet'):
            self.logger = logging.getLogger('quiet')

        
        for username in self.usernames:
            try:
                self.users[username] = User.objects.get(username=username)
                self.logger.info("User {} already exists!".format(username))
            except User.DoesNotExist:
                params = {
                    'username': username,
                    'password': self.default_pw,
                    'first_name': username.capitalize(),
                    'last_name': 'TEST',
                    'email': '{}@{}'.format(username, self.email_domain)
                }
                
                # create reg user if !admin    
                create_user = User.objects.create_user if username != 'admin' else User.objects.create_superuser
                self.users[username] = create_user(**params)
                self.logger.info('{}: {} created, password: {}'.format('User' if username != 'admin' \
                                                                        else 'Admin',
                                                                        username,
                                                                        self.default_pw))   


        for fart in self.fart_types:
            try:
                self.farts[fart] = FartType.objects.get(name=fart)
                self.logger.info("{} fart type already exists! Come up with a new one.".format(fart))
            except:
                FartType.objects.get_or_create(name=fart)
                self.logger.info("{} fart type added.".format(fart))

        
        for i in range(20):
            fart_params = {
                'user': self.users[random.choice(self.usernames)],
                'city': random.choice(['Ring Of Fire','Flavor Town','Nolubeville']),
                'state': 'BFE',
                'score': random.randint(0,10),
                'ftype': self.farts[random.choice(self.fart_types)],
                'noise_scale': random.randint(0,10),
                'smell_scale': random.randint(0,10),
                'exposures': random.randint(0,10000)
            }

            Fart.objects.get_or_create(**fart_params)
            self.logger.info('Fart by {} added.'.format(fart_params['user']))


