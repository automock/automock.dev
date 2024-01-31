---
sidebar_position: 1
---

# Introduction

## Adapters: Bridging Frameworks and Dependency Injection

Automock's core strength lies in its consistent logic and approach to automating mock object creation. However, the
diverse landscape of Dependency Injection frameworks, each with its unique intricacies, presents a challenge. To
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
            <th>Jest (<code>@suites/jest</code>)</th>
            <th>Sinon (<code>@suites/sinon</code>)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>NestJS Adapter (<code>@suites/adapters.nestjs</code>)</strong></td>
            <td>✅</td>
            <td>✅</td>
        </tr>
        <tr>
            <td><strong>Inversify Adapter (<code>@suites/adapters.inversify</code>)</strong></td>
            <td>✅ (Beta)</td>
            <td>✅ (Beta)</td>
        </tr>
        <tr>
            <td><strong>TSyringe Adapter (<code>@suites/adapters.tsyringe</code>)</strong></td>
            <td colspan="2" align="center">Contributions are Welcome 🙏</td>
        </tr>
        <tr>
            <td><strong>Ts.ED Adapter (<code>@suites/adapters.tsed</code>)</strong></td>
            <td align="center" colspan="2">Contributions are Welcome 🙏</td>
        </tr>
        <tr>
            <td><strong>TypeDI Adapter (<code>@suites/adapters.typedi</code>)</strong></td>
            <td align="center" colspan="2">Contributions are Welcome 🙏</td>
        </tr>
    </tbody>
</table>
