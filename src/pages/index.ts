import i18next from 'i18next'
import {useRouter} from 'next/router'
import {useEffect} from 'react'

const Index = () => {

    const router = useRouter();

    useEffect(() => {
        if (router.pathname === '/') {
            const lang = i18next.language.substring(0, 2);
            router.push('/' + lang)
                .then(r => {
                    console.log(`Set to language '${lang}'`);
                });
        }
    }, []);

    return null
}

export default Index;
