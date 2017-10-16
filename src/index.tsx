import * as React from 'react';
import {render} from 'react-dom';
import bulma from './main'

if (require.main !== module) {
  render(
    <div>
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
                <pre><code>npm install bulma</code></pre>
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
              <figure><pre><code>&lt;link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"&gt;</code></pre></figure>
            </bulma.MessageBody>
          </bulma.Message>
          <hr />
          <bulma.Title size={bulma.TitleSizes.Four}>Starter template</bulma.Title>
          <bulma.Content>
            <p>
              If you want to get started <strong>right away</strong>, you can use this <strong>HTML starter template</strong>. Just copy/paste this code in a file and save it on your computer.
            </p>
          </bulma.Content>
          <div>
            <figure><pre><code>&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;meta charset="utf-8"&gt;&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
                &lt;title&gt;Hello Bulma!&lt;/title&gt;
                &lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"&gt;
                &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css"&gt;
              &lt;/head&gt;
              &lt;body&gt;
              &lt;section class="section"&gt;
                &lt;div class="container"&gt;
                  &lt;h1 class="title"&gt;
                    Hello World
                  &lt;/h1&gt;
                  &lt;p class="subtitle"&gt;
                    My first website with &lt;strong&gt;Bulma&lt;/strong&gt;!
                  &lt;/p&gt;
                &lt;/div&gt;
              &lt;/section&gt;
              &lt;/body&gt;
            &lt;/html&gt;</code></pre>
            </figure>
          </div>
        </bulma.Container>
      </bulma.Section>
    </div>,
    document.getElementById('root')
  );
}
