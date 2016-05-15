# Angular2 Services Example with DI
Learning Angular2 Services

# About the boilerplate
<ul>
    <li>boilerplate fixes</li>
    <li>gulp integrated</li>
    <li>browser-sync integrated</li>
    <li>Syntactically Awesome Stylesheets aka</li>
        <ul>
            <li>CSS with Super Powers</li>
            <li>Feature to use block formatting</li>
            <li>interoperable to use CSS in SCSS</li>
        </ul>
</ul>

# How to use
<ul>
    <li>clone repro</li>
    <li>npm install</li>
    <li>npm start</li>
</ul>

# Learned so far
<p>Angular2 Dependency Injection is awesome! Certainly when building services to reuse code.<br>
The use of services in Angular2, is a great way to centralize some logic of your app.
</p>

<ul>
    <li>Create a service</li>
    <li>Injecting a service</li>
    <li>Created a calculator service</li>
    <li>Created a data service</li>
    <ul>
        <li>Make use of a single instance of a service. Data will be shared between components.
            And it is necessary to make your service available at the top level. Thus, in the boot.ts file.
        </li>
        <li>Make use of multiple instances of services. Each component has its own data. No data sharing</li>
    </ul>
</ul>
