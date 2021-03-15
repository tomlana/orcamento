import React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import { Jumbotron, Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Site para orçamentos de serviços de T.I" />
            </Head>

            <Menu />

            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #050c3d;
                        color: #00a1fc;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">TTEC - Soluções em desenvolvimento de sistemas</h1>
                    <p className="lead">Faça o seu orçamento de site ou aplicativo conosco, temos os melhores preços e a melhor qualidade!</p>
                    <p className="lead">
                        <a href='/orcamento' className="btn btn-outline-primary btn-lg mt-4">Orçamento</a>
                    </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }.circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #0A197D;
                        font-size: 52px;
                        color: #fff;
                        padding-top: 24px;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }`}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Conheça alguns de nossos serviços</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="laptop-code" />
                            </div>
                            <h2 className="mt-4 mb-4">Desenvolvimento de sites</h2>
                            <p>
                                Desenvolvemos o seu site da maneira quer melhor atender as suas necessidades
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="mobile-alt" />
                            </div>
                            <h2 className="mt-4 mb-4">Criação de aplicativos</h2>
                            <p>
                                Desenvolvemos seu aplicativo utilizando tecnologias modernas.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="network-wired" />
                            </div>
                            <h2 className="mt-4 mb-4">Manutenção de sistemas</h2>
                            <p>
                                Prestamos suportes a sistemas já desenvolvidos.
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Rodape />
        </div>
    );
}

export default Home;