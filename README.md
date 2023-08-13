# What is Redux Library?
The **Redux library** in **Javascript** is an application state management library. It is used to store and manage the state of the application in an easy and understandable way.

# Project idea
I have consulted the [**Redux library**](https://github.com/reduxjs/redux) and used TypeScript language to write it.

# Using the Redux Library
Open Terminal at the project root directory.

Install the **TypeScript** environment.

``` 
npm install -g typescript
```

You can point to or dodge paths with **"include"** and **"exclude"** in the **tsconfig.json** file.

Put the path specified earlier in the tsconfig.json file into the script tag in the index.html file to link. Remember to set **type** as **module**.

```html
<script type="module" src="your-typescript-file.ts"></script>
```

Finally, to run the project using **TypeScript Compiler** to compile from TS to JS, immediately in the directory tree where file.ts is located, there will be an additional file.js for us to run in the browser.

```
tsc --watch
```

And I also edited the js file that nodejs compiled to make the code neater and cleaner and used **use strict** to set strict mode to avoid mistakes.

# Experience more
To be able to experiment more when using the library in addition to the project I have done and will introduce below, you can apply the library to projects with [**CRUD**](https://github.com/VenusakaVXT/marriage-manager-console-version) features (management of students, employees, products, etc.) or [**Todo List**](https://github.com/VenusakaVXT/template-library/tree/master/template_HTML_CSS_and_Javascript/template_HTML_CSS_JS_21).

And in my project, I also created a **bonus.ts** file that simulates a user management application, you can use your redux library created to try it out or you can download redux to your computer as follows:

- Using **npm** in [**NodeJS**](https://github.com/nodejs) environment
```
npm install redux
```

- Using **yarn** in **Javascript** environment
```
yarn add redux
```

After installing Redux, you need to import your code.
```javascript
import Redux from 'redux'
```

*Note: If you don't have **npm** installed, install it and follow the instructions **[here]**(https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)

# Overview of Redux Library
Redux helps to separate application state and processing logic. It works based on the Flux model, with a single store to store the state and actions to change that state.

<div align="center">

![image](https://github.com/VenusakaVXT/redux-library/assets/125566811/c6750124-fc6c-4aef-aab1-c7a1270efe4a)

*Flux Model.*
</div>

This is a data flow model that emulates the Redux library:

<div align="center">

https://github.com/VenusakaVXT/redux-library/assets/125566811/bd104a05-5fbb-46b6-b01c-fd66dba70dac

*Simulate how Redux works on ATM deposit/withdrawal application.*
</div>

Based on the above model, I also coded the redux library myself with the same operation and built the redux-based application like the picture above but it is a **Money Saving Piggy application** :)))

# Results Obtained
I built the UI and it works like below.

<div align="center">

https://github.com/VenusakaVXT/redux-library/assets/125566811/3c0b4438-f76c-43a1-983f-7f19334226f9

*The money saving piggy bank application works using the Redux library.*
</div>

