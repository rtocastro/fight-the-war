export const releases = [
  {
    id: 'out-for-blood',

    title: 'Out For Blood',
    year: 2009,
    type: 'EP',

    artwork: '/artwork/releases/out-for-blood.png',

    lineup: [
      {
        name: 'Jason Kaufman',
        roles: ['Vocals'],
      },
      {
        name: 'Cody Brill',
        roles: ['Bass'],
      },
      {
        name: 'Chris Collier',
        roles: ['Studio Bass'],
      },
      {
        name: 'Phillip Paschall',
        roles: ['Lead Guitar'],
      },
      {
        name: 'Jonathan Urrutia',
        roles: ['Rhythm Guitar', 'Backing Vocals'],
      },
      {
        name: 'Jonathan Paschall',
        roles: ['Drums'],
      },
    ],

    production: {
      engineer: ['Chris Collier'],
      mixedBy: ['Chris Collier'],
      masteredBy: ['Chris Collier'],
      studio: 'CMC21 Productions',
    },

    tracks: [
      {
        trackNumber: 1,
        title: 'Out For Blood',
      },
      {
        trackNumber: 2,
        title: 'Whiskey Warlord',
      },
      {
        trackNumber: 3,
        title: 'Bastard',
      },
      {
        trackNumber: 4,
        title: 'Senile',
      },
    ],
  },

  {
    id: 'self-destruction',

    title: 'Self Destruction',
    year: 2011,
    type: 'EP',

    artwork: '/artwork/releases/self-destruction.png',

    lineup: [
      {
        name: 'Jason Kaufman',
        roles: ['Vocals'],
      },
      {
        name: 'Ricardo Torres',
        roles: ['Bass', 'Backing Vocals'],
      },
      {
        name: 'Phillip Paschall',
        roles: ['Lead Guitar'],
      },
      {
        name: 'Jonathan Urrutia',
        roles: ['Rhythm Guitar', 'Backing Vocals'],
      },
      {
        name: 'Jonathan Paschall',
        roles: ['Drums'],
      },
    ],

    production: {
      engineer: ['Chris Collier'],
      mixedBy: ['Chris Collier'],
      masteredBy: ['Chris Collier'],
      studio: 'Sound Mountain',
    },

    tracks: [
      {
        trackNumber: 1,
        title: 'Rise & Revolt',
      },
      {
        trackNumber: 2,
        title: 'Prisoner of War',
      },
      {
        trackNumber: 3,
        title: 'Break The Fall',
        writingCredits: ['Jonathan Paschall'],
      },
      {
        trackNumber: 4,
        title: 'Possession',
        writingCredits: [
          'Jason Kaufman',
          'Jonathan Urrutia',
        ],
      },
    ],
  },

  {
    id: 'back-on-the-warpath',

    title: 'Back On The Warpath',
    year: 2013,
    type: 'EP',

    artwork:
      '/artwork/releases/back-on-the-warpath.jpg',

    lineup: [
      {
        name: 'Jason Kaufman',
        roles: ['Vocals'],
      },
      {
        name: 'Ricardo Torres',
        roles: ['Bass', 'Backing Vocals'],
      },
      {
        name: 'Jonathan Urrutia',
        roles: ['Guitar', 'Backing Vocals'],
      },
      {
        name: 'Iorden Mitev',
        roles: ['Drums', 'Backing Vocals'],
      },
    ],

    production: {
      engineer: [
        'Taylor Voeltz',
        'Dana Willax',
      ],
      mixedBy: [
        'Taylor Voeltz',
        'Dana Willax',
      ],
      masteredBy: [
        'Taylor Voeltz',
        'Dana Willax',
      ],
      studio: 'Sounds Like Robots Fighting',
    },

    artworkCredit: 'Ricardo Torres',

    tracks: [
      {
        trackNumber: 1,
        title: 'Back On The Warpath',
      },
      {
        trackNumber: 2,
        title: 'Suffocate',
      },
      {
        trackNumber: 3,
        title: 'Possession',
        displayTitle:
          'Possession (Re-possessed Version)',
        writingCredits: [
          'Jason Kaufman',
          'Jonathan Urrutia',
        ],
      },
    ],
  },
]

export const liveSets = [
  {
    id: 'paladinos-2012',

    title: "Live at Paladino's",
    date: '2012-06-03',
    year: 2012,

    venue: "Paladino's",
    city: 'Reseda, CA',

    type: 'Live Set',

    trackCount: 7,
    itemCount: 8,

    artwork: null,

    tracks: [
      {
        trackNumber: 1,
        title: 'Rise & Revolt',

        file:
          '/audio/paladinos/Fight The War - Rise & Revolt.mp3',

        duration: 350.989,
        durationLabel: '5:50',

        type: 'song',
      },

      {
        trackNumber: 2,
        title: 'Bastard',

        file:
          '/audio/paladinos/Fight The War - Bastard.mp3',

        duration: 374.891,
        durationLabel: '6:14',

        type: 'song',
      },

      {
        trackNumber: 3,
        title: 'Senile',

        file:
          '/audio/paladinos/Fight The War - Senile.mp3',

        duration: 417.393,
        durationLabel: '6:57',

        type: 'song',
      },

      {
        trackNumber: 4,
        title: 'Untitled Improvisation',
        displayTitle: '????',

        file:
          '/audio/paladinos/Paladinoes 6-3-12_06improv.mp3',

        duration: 127.512,
        durationLabel: '2:07',

        type: 'improvisation',

        note:
          'Improvised live performance.',
      },

      {
        trackNumber: 5,
        title: 'Possession',

        file:
          '/audio/paladinos/Fight The War - Possession.mp3',

        duration: 404.88,
        durationLabel: '6:44',

        type: 'song',
      },

      {
        trackNumber: null,
        title: 'Happy Birthday Jason',

        file:
          '/audio/paladinos/Fight The War - Happy Birthday Jason.mp3',

        duration: 55.153,
        durationLabel: '0:55',

        type: 'interlude',
      },

      {
        trackNumber: 6,
        title: 'Sex & Cigarettes',

        file:
          '/audio/paladinos/Fight The War - Sex and Cigarettes.mp3',

        duration: 343.701,
        durationLabel: '5:43',

        type: 'song',
      },

      {
        trackNumber: 7,
        title: 'Whiskey Warlord',

        file:
          '/audio/paladinos/Fight The War - Whiskey Warlord.mp3',

        duration: 343.205,
        durationLabel: '5:43',

        type: 'song',
      },
    ],
  },
]