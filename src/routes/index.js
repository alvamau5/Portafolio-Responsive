import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'Mi Portafolio'}))

router.get('/sobre-mi', (req, res) => res.render('sobre-mi', {title: 'Mi Portafolio (Sobre Mi)'}))

router.get('/mis-proyectos', (req, res) => res.render('mis-proyectos', {title: 'Mi Portafolio (Mis Proyectos)'}))

router.get('/contacto', (req, res) => res.render('contacto', {title: 'Mi Portafolio (Contacto)'}))

export default router
