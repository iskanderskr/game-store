type Props = {
    title: string
}

export default function Home({ title = 'React avançado' }: Props) {
    return (
        <div>{title}</div>
    )
}