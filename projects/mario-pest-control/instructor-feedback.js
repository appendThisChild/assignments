// Really great work on organizing your HTML and styling your project.

// HTML Feedback
  Overally great organization. I would start moving away from using <br> tags and instead use margin/padding/flex box for spacing.  
  You have a lot more control of where elements are placed using one of those methods instead.
  
// CSS feedback
  Very nice, I see you selected elements by their tag name, which is totally fine for a smaller app such as this, but as things begin
  to scale, you will definitely be wanting to style elements using IDs, or by selecting elements by giving their parent element
  and id and use CSS traversing
  
  Example:
    #container > h1 {
      some styling
    }    
    
    * only grab the h1's that are direct children of the HTML element that has an ID of 'container' *
  
// JS feedback
  I don't have anything to really say here, it's well organized, easy to read, uses proper js conventions, and works!
  The only thing I saw was that you use 'innerText' instead of 'textContent' to set the output value to the DOM.
  While they appear to work the same way, textContent is actually preferred as it was standardized before innerText.
  
