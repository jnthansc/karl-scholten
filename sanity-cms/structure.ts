import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.divider(),
      S.listItem()
        .title('About')
        .schemaType('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Imprint')
        .schemaType('imprintPage')
        .child(S.document().schemaType('imprintPage').documentId('imprintPage')),
    ])





