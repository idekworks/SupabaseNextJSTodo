export default function SecondLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="mt-6 text-center">
            <p>Layout 2</p>
            {children}
        </main>
    )
}