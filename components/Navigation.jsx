import Link from 'next/link' // importar compoñente esencial de next para usar no menu

// importar estilos esclusivos da compoñente
import styles from './Navigation.module.css'

const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'About',
    route: '/about'
}, {
    label: 'Services',
    route: '/services'
}, {
    label: 'Blog',
    route: '/posts'
}
]

export function Navigation() {
    return (
    <header className={styles.header}>
        <nav>
            <ul className={ styles.navigation }>
                {links.map(({ label, route }) => (
                    <li key={route} className="py-2 lg:py-0 ">
                        <Link href={route} className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    ) 
}