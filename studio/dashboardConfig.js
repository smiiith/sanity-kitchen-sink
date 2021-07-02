export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60df4aad650c2e2d176e05f6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cvp6e5zt',
                  apiId: 'b2cf5599-e5a7-43b2-b34a-43069f9d7c17'
                },
                {
                  buildHookId: '60df4aad602b68245fefdf77',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eo2dkq3m',
                  apiId: 'ef3a26f1-6a7f-49ea-8137-e53dde8dc1c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smiiith/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eo2dkq3m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
