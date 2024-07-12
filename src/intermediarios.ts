import { Request, Response, NextFunction } from 'express'

export const meuPrimeiroIntermediario = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passei pelo intermediário')

    if (req.params.item === 'sair') {
        return res.send('A requisição foi respondida no intermediário, antes de chegar no controlador')
    }
    next()
}

export const intermediarioGeral = (eq: Request, res: Response, next: NextFunction) => {
    console.log('Passou no intermediário Geral')

    next()
}