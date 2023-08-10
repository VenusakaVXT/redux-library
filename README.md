# What is Redux Library?
The Redux library in Javascript is an application state management library. It is used to store and manage the state of the application in an easy and understandable way.

# Project idea
I have consulted the redux library [here](https://github.com/reduxjs/redux) and used TypeScript language to write it.

*Note: In order for the browser to execute TS code, we must compile from TS to JS.

# Using the Redux Library
Open Terminal at the project root directory.

Install the TypeScript environment.

``` 
npm install -g typescript
```

You can point to or dodge paths with **"include"** and **"exclude"** in the **tsconfig.json** file.

Put the path specified earlier in the tsconfig.json file into the script tag in the index.html file to link. Remember to set **type** as **module**.

```html
<script type="module" src="your-typescript-file.ts"></script>
```

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

Based on the above model, I also coded the redux library myself with the same operation and built the redux-based application like the picture above but it is a Money Saving Piggy application :)))

# Results Obtained
I built the UI and it works like below.

<div align="center">

https://github.com/VenusakaVXT/redux-library/assets/125566811/3c0b4438-f76c-43a1-983f-7f19334226f9

*The money saving piggy bank application works using the Redux library.*
</div>

