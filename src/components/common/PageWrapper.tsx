interface PageProps {
    title: string;
    description: string;
}

const PageWrapper = ({ pageProps, children }: { pageProps: PageProps, children: React.ReactNode }) => {
    return (
        <div>
            <h1>{pageProps.title}</h1>
            <p>{pageProps.description}</p>
            {children}
        </div>
    );
};

export default PageWrapper;