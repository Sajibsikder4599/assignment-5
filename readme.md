



1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**Answer of  question**
** The main difference of those selector element is following,
   
 **getElementById** : select a single element based on a **unique**  attribute. provides single element object if get. On the other hand return Null.
   
 **getElementsByClassName** : select  multiple element where found same  a specific class name. provides HTMLcollection of element.
 
 **querySelector()**: select first element that matches specific CSS selector (#id,.class,tag).return single element object if get. On the other hand return Null.

  **querySelector()**: select All elements that matches specific CSS selector (#id,.class,tag).return collection elements object if get. On the other hand return Null.

  
 
2. How do you **create and insert a new element into the DOM**?
**Answer of  question**

** first of all declare variable then document.createElement(""). I pass the html tag which i want to create inside of createElement.

## Example: let newDiv = document.createElement("div");

having created that,
that append this div where i want to insert.
## Example:  let parentElement = document.getElementById("myParent");
parentElement.appendChild(newDiv).


  
3. What is **Event Bubbling** and how does it work?

**Answer of  question**
Event bubling is a process of Js . where happens a event (like: "click") then trigger start from most insertest element and it continue flow upward
as long as reaches to root element.
##Example:

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">
      Click Here
    </button>
  </div>
</div>
```

here,
if i click the button it continues to upward parent till **grandparent**.




4. What is **Event Delegation** in JavaScript? Why is it useful?
**Answer of  question**
Event Delegation is a pattern where assign a event listenr on a parent.handle of this parent's child event. 

##Why it's useful
1.Saves Memory
2.Handles Dynamic Elements
3.Keeps Code Clean




6. What is the difference between **preventDefault() and stopPropagation()** methods?

**Answer of  question**

**preventDefault()** : it stops a default action of a certain event.  
**stopPropagation()** : it stops event bubling.where is clicked that specific element occur the event . it won't go upward parent.


