import React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import { Container, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Orcamento() {
  return (
    <div>
    <Head>
        <title>Orcamento - TTEC</title>
        <meta name="description" content="Solicite um orçamento" />
    </Head>

  
      <Menu />

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
              background-color: #050c3d;
              color: #00a1fc;
              padding-top: 40px;
              padding-bottom: 40px;
              margin-bottom: 0rem !important;
          }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Orçamento</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="form-orcamento">
        <style>
          {`.form-orcamento{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: #fff;
              margin-bottom: 0rem !important;
            }`}
        </style>
        <Container>
          <Form>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Nome completo" />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Insira seu email" />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input type="text" name="phone" id="phone" placeholder="Telefone fixo" />
            </FormGroup>

            <FormGroup>
              <Label for="whatsApp">Celular</Label>
              <Input type="text" name="whatsApp" id="whatsApp" placeholder="Celular com whatsapp" />
            </FormGroup>

            <FormGroup>
              <Label for="projeto">Projeto</Label>
              <Input type="textarea" name="projeto" id="projeto" placeholder="Nos fale um pouco sobre o que deseja que seja produzido" />
            </FormGroup>

            <Button type="submit" outline color="primary">Solicitar</Button>
          </Form>
        </Container>
      </Jumbotron>

      <Rodape />
    </div>
  );
}

export default Orcamento;