---
sidebar_position: 1
---

# Introduction

## Adapters: Bridging Frameworks and Dependency Injection

Automock's core strength lies in its consistent logic and approach to automating mock object creation. However, the
diverse landscape of Dependency Injection  frameworks, each with its unique intricacies, presents a challenge. To
address this, Automock introduces the concept of "Adapters."

Automock Adapters are tailored connectors designed specifically for different DI frameworks. They ensure seamless
integration, optimal performance, and a harmonized testing experience across various contexts. Whether it's the nuances
in how dependencies are registered, the methods of resolution, or the specific annotations and decorators unique to a
framework, Automock Adapters adeptly handle these details.

### Supported DI Frameworks

<table>
    <thead>
        <tr>
            <th>DI Framework Adapter</th>
            <th>Jest (<code>@automock/jest</code>)</th>
            <th>Sinon (<code>@automock/sinon</code>)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>NestJS Adapter (<code>@automock/adapters.nestjs</code>)</strong></td>
            <td>✅</td>
            <td>✅</td>
        </tr>
        <tr>
            <td><strong>Inversify Adapter (<code>@automock/adapters.inversify</code>)</strong></td>
            <td>✅ (Beta)</td>
            <td>✅ (Beta)</td>
        </tr>
        <tr>
            <td><strong>TSyringe Adapter (<code>@automock/adapters.tsyringe</code>)</strong></td>
            <td colspan="2" align="center">Contributions are Welcomed 🙏</td>
        </tr>
        <tr>
            <td><strong>Ts.ED Adapter (<code>@automock/adapters.tsed</code>)</strong></td>
            <td align="center" colspan="2">Contributions are Welcomed 🙏</td>
        </tr>
        <tr>
            <td><strong>TypeDI Adapter (<code>@automock/adapters.typedi</code>)</strong></td>
            <td align="center" colspan="2">Contributions are Welcomed 🙏</td>
        </tr>
    </tbody>
</table>

## Seeking Contributors for DI Framework Integrations

We are always looking to expand our horizons and provide support for a wider range of Dependency Injection frameworks.
Our goal is to make Automock a versatile tool that can seamlessly integrate with various DI libraries,
enhancing the developer experience across different ecosystems.

We believe in the power of community collaboration, and we're seeking contributors who are passionate about DI and
testing to help us integrate more frameworks into Automock.

:::info
* **TSyringe**: A lightweight DI container for TypeScript developed by Microsoft. We're actively seeking contributors
   for this integration. Find more details in [this issue here](https://github.com/automock/automock/issues/104).

* **Ts.ED**: A Node.js and TypeScript framework on top of Express/Koa.js. If you have experience with Ts.ED and are
   interested in contributing to Automock, see the [issue here](https://github.com/automock/automock/issues/105).

We appreciate all contributions, big or small, and we're excited to see Automock grow with the help of the community 
:heart:
:::