import * as React from 'react';
import {render} from 'react-dom';
import * as bulma from './main'

if (require.main !== module) {
  render(
    <div>
      <bulma.Container>
        <bulma.Navbar>
          <bulma.NavbarBrand>
            <bulma.NavbarItem href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" height="28" width="112" />
            </bulma.NavbarItem>
          </bulma.NavbarBrand>
          <bulma.NavbarMenu>
            <bulma.NavbarStart>
              <bulma.NavbarItem hasDropdown={true} hoverable={true}>
                <bulma.NavbarLink href="/documentation/overview/start/">Docs</bulma.NavbarLink>
                <bulma.NavbarDropdown>
                  <bulma.NavbarItem href="/documentation/overview/start/">Overview</bulma.NavbarItem>
                  <bulma.NavbarItem href="https://bulma.io/documentation/modifiers/syntax/">Modifiers</bulma.NavbarItem>
                  <bulma.NavbarItem href="https://bulma.io/documentation/columns/basics/">Columns</bulma.NavbarItem>
                  <bulma.NavbarItem href="https://bulma.io/documentation/layout/container/">Layout</bulma.NavbarItem>
                  <bulma.NavbarItem href="https://bulma.io/documentation/form/general/">Form</bulma.NavbarItem>
                  <bulma.NavbarItem href="https://bulma.io/documentation/elements/box/">Elements</bulma.NavbarItem>
                  <bulma.NavbarItem href="https://bulma.io/documentation/components/breadcrumb/">Components</bulma.NavbarItem>
                  <bulma.NavbarItem href="https://bulma.io/documentation/modifiers/syntax/">Elements</bulma.NavbarItem>
                  <bulma.NavbarDivider />
                  <bulma.NavbarItem>
                    <div>
                      <p className={bulma.ResponsiveSize.size6Desktop}>
                        <strong>Version 0.6.0</strong>
                      </p>
                      <small>
                        <a href="https://versions.bulma.io/">View all versions</a>
                      </small>
                    </div>
                  </bulma.NavbarItem>
                </bulma.NavbarDropdown>
              </bulma.NavbarItem>
            </bulma.NavbarStart>
            <bulma.NavbarEnd>
            </bulma.NavbarEnd>
          </bulma.NavbarMenu>
        </bulma.Navbar>
      </bulma.Container>
      <bulma.Hero color={bulma.Colors.Link}>
        <bulma.HeroBody>
          <bulma.Container>
            <bulma.Columns>
              <bulma.Column>
                <bulma.Title>Documentation</bulma.Title>
                <bulma.Subtitle>Everything you need to <strong>create a website</strong> with Bulma</bulma.Subtitle>
              </bulma.Column>
              <bulma.Column narrow={bulma.Narrow.All}>
                <bulma.Box>ADS</bulma.Box>
              </bulma.Column>
            </bulma.Columns>
          </bulma.Container>
        </bulma.HeroBody>
        <bulma.HeroFoot>
          <bulma.Container>
            <bulma.Tabs styles={bulma.TabsStyles.Boxed}>
              <bulma.Tab active={true}>Overview</bulma.Tab>
              <bulma.Tab>Modifiers</bulma.Tab>
              <bulma.Tab>Columns</bulma.Tab>
              <bulma.Tab>Layout</bulma.Tab>
              <bulma.Tab>Form</bulma.Tab>
              <bulma.Tab>Elements</bulma.Tab>
              <bulma.Tab>Components</bulma.Tab>
            </bulma.Tabs>
          </bulma.Container>
        </bulma.HeroFoot>
      </bulma.Hero>
      <bulma.Navbar hasShadow={true}>
        <bulma.Container>
          <bulma.NavbarTabs>
            <bulma.NavbarItem tab={true} active={true}>Start</bulma.NavbarItem>
            <bulma.NavbarItem tab={true}>Customize</bulma.NavbarItem>
            <bulma.NavbarItem tab={true}>Classes</bulma.NavbarItem>
            <bulma.NavbarItem tab={true}>Modular</bulma.NavbarItem>
            <bulma.NavbarItem tab={true}>Responsiveness</bulma.NavbarItem>
            <bulma.NavbarItem tab={true}>Variables</bulma.NavbarItem>
            <bulma.NavbarItem tab={true}>Colors</bulma.NavbarItem>
            <bulma.NavbarItem tab={true}>Functions</bulma.NavbarItem>
            <bulma.NavbarItem tab={true}>Mixins</bulma.NavbarItem>
          </bulma.NavbarTabs>
        </bulma.Container>
      </bulma.Navbar>
      <bulma.Section>
        <bulma.Container>
          <bulma.Title>Getting started</bulma.Title>
          <bulma.Subtitle>You only need <strong>1 CSS file</strong> to use Bulma</bulma.Subtitle>
          <hr />
          <bulma.Content>
            <p>There are several ways to <strong>get started</strong> with Bulma. You can either:</p>
            <ol>
              <li>
                use <strong>npm</strong> to install the Bulma package
              </li>
              <li>
                use the cdnjs <strong>CDN</strong> to link to the Bulma stylesheet
              </li>
              <li>
                use the <strong>GitHub repository</strong> to get the latest development version
              </li>
            </ol>
          </bulma.Content>
          <bulma.Media>
            <bulma.MediaLeft>
              <bulma.Title size={bulma.TitleSizes.Five}>1</bulma.Title>
            </bulma.MediaLeft>
            <bulma.MediaContent>
              <bulma.Title size={bulma.TitleSizes.Five}>
                Use <strong>NPM</strong> <em>(recommended)</em>:
              </bulma.Title>
              <figure>
                <pre>
                  <code>
                    {`npm install bulma`}
                  </code>
                </pre>
              </figure>
            </bulma.MediaContent>
          </bulma.Media>
          <bulma.Media>
            <bulma.MediaLeft>
              <bulma.Title size={bulma.TitleSizes.Five}>2</bulma.Title>
            </bulma.MediaLeft>
            <bulma.MediaContent>
              <bulma.Title size={bulma.TitleSizes.Five}>
                Use the <a href="https://cdnjs.com/" target="_blank">cdnjs</a> <strong>CDN</strong>
                <br />
                <a href="https://cdnjs.com/libraries/bulma">https://cdnjs.com/libraries/bulma</a>
              </bulma.Title>
            </bulma.MediaContent>
          </bulma.Media>
          <bulma.Media>
            <bulma.MediaLeft>
              <bulma.Title size={bulma.TitleSizes.Five}>3</bulma.Title>
            </bulma.MediaLeft>
            <bulma.MediaContent>
              <bulma.Title size={bulma.TitleSizes.Five}>
                Download from the <strong>repository</strong>
                <br />
                <a href="https://github.com/jgthms/bulma/tree/master/css">https://github.com/jgthms/bulma/tree/master/css</a>
              </bulma.Title>
            </bulma.MediaContent>
          </bulma.Media>
          <hr />
          <bulma.Message color={bulma.Colors.Info}>
            <bulma.MessageHeader>Font Awesome icons</bulma.MessageHeader>
            <bulma.MessageBody>
              <p>If you want to use icons with Bulma, don't forget to include <a href="https://fortawesome.github.io/Font-Awesome/">Font Awesome</a>:</p>
              <figure>
                <pre>
                  <code>
                    {`<link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">`}
                  </code>
                </pre>
              </figure>
            </bulma.MessageBody>
          </bulma.Message>
          <hr />
          <bulma.Title size={bulma.TitleSizes.Four}>Starter template</bulma.Title>
          <bulma.Content>
            <p>
              If you want to get started <strong>right away</strong>, you can use this <strong>HTML starter template</strong>. Just copy/paste this code in a file and save it on your computer.
            </p>
          </bulma.Content>
          <figure>
            <pre>
              <code>
                {`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hello Bulma!</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css">
</head>
<body>
<section class="section">
  <div class="container">
    <h1 class="title">
      Hello World
    </h1>
    <p class="subtitle">
      My first website with <strong>Bulma</strong>!
    </p>
  </div>
</section>
</body>
</html>`}
              </code>
            </pre>
          </figure>
        </bulma.Container>
      </bulma.Section>
      <bulma.Section>
        <bulma.Container>
          <p className={bulma.TextAlignment.Cenered + ' ' + bulma.TextColors.GrayLight}>
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" height="24" width="128" />
            <br />
            This page is <strong className={bulma.TextColors.Gray}>open source</strong>.
            Noticed a typo? Or something unclear?
            <a className={bulma.TextColors.Gray} href="https://github.com/jgthms/bulma/blob/master/docs/documentation/overview/start.html" style={{'border-bottom': '1px solid currentColor'}}>
              Improve this page on GitHub
            </a>
          </p>
        </bulma.Container>
      </bulma.Section>
      <bulma.Hero color={bulma.Colors.Info}>
        <bulma.Container>
          <bulma.Columns>
            <bulma.Column size={bulma.TwelveColumnsSystem.Four}>
              <bulma.Title>Bulma <strong>Partners</strong></bulma.Title>
              <bulma.Subtitle>Check out their products!</bulma.Subtitle>
            </bulma.Column>
            <bulma.Column size={bulma.TwelveColumnsSystem.Eight}>
              ADS
            </bulma.Column>
          </bulma.Columns>
        </bulma.Container>
      </bulma.Hero>
    </div>,
    document.getElementById('root')
  );
}
