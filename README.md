## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementById, getElementsByClassName, querySelector, and querySelectorAll are used in JavaScript to select elements from the DOM. getElementById() selects a single element using its ID and returns only one element. getElementsByClassName() selects multiple elements using a class name and returns an HTMLCollection. querySelector() uses a CSS selector to select the first matching element. On the other hand, querySelectorAll() uses a CSS selector to select all matching elements and returns a NodeList.

### 2. How do you create and insert a new element into the DOM?
ans: In JavaScript, a new element can be created and inserted into the DOM using document.createElement() and methods like appendChild() or append(). First, createElement() is used to create a new HTML element. Then content or attributes can be added to that element. Finally, the element is inserted into the DOM by appending it to a parent element using appendChild() or append().

### 3. What is Event Bubbling? And how does it work?
ans: Event Bubbling is a process in JavaScript where an event starts from the target element and then bubbles up to its parent elements in the DOM tree. When an event happens on a child element (like a button), the same event is triggered on its parent, then the parent’s parent, and continues up to the document.

For example, if you click a button inside a div, the click event first runs on the button, then on the div, and then on higher parent elements. This upward flow of the event through the DOM is called Event Bubbling.

### 4. What is Event Delegation in JavaScript? Why is it useful?
ans: Event Delegation in JavaScript is a technique where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements. The parent element listens for events that bubble up from its child elements and handles them using event.target.

It is useful because it improves performance, reduces the number of event listeners, and also works for dynamically added elements. Instead of adding a listener to every child element, one listener on the parent can manage all child events.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
 ans: preventDefault() and stopPropagation() are JavaScript event methods but they do different things. preventDefault() is used to stop the default behavior of an element. For example, it can prevent a form from submitting or stop a link from opening a new page. On the other hand, stopPropagation() is used to stop the event from bubbling up to parent elements in the DOM. This means the event will run only on the current element and will not trigger event handlers on its parent elements.
---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
