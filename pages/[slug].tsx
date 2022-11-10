import { getAllDocuments, getDocumentBySlug } from "../utils/documentUtils";
import markdownToHtml from "../utils/markdownToHtml";
import DocumentType from "../types/document"
import markdownStyles from '../styles/markdown-styles.module.css'
import Hero from "../components/hero";
import Head from "next/head";


type Props = {
    document: DocumentType
}

export default function Document({ document }: Props) {
    return (
        <div>
            <Head>
                <title>{document.title}</title>
            </Head>
            <Hero />
            <div className="max-w-2xl mx-auto p-4">
                <div className="text-3xl font-bold tracking-tighter leading-tight mb-6">{document.title}</div>
                <div
                    className={markdownStyles['markdown']}
                    dangerouslySetInnerHTML={{ __html: document.content }}
                />
            </div>
        </div>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {

    const document = getDocumentBySlug(params.slug, [
        'title',
        'content',
    ])
    const content = await markdownToHtml(document.content || '')

    return {
        props: {
            document: {
                ...document,
                content
            }
        }
    }
}

export async function getStaticPaths() {
    const documents = getAllDocuments(['slug'])

    return {
        paths: documents.map((document) => {
            return {
                params: {
                    slug: document.slug,
                },
            }
        }),
        fallback: false,
    }
}
