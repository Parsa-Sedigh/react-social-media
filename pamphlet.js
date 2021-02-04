/* SECTION 1. Intro The 10 Days of React
1. 1. What Problem Does React Solve:
Let's look at two different ways(2 coding approaches) we can create UIs with JS, without react or WITHOUT a library whatsoever(plain js).
- look at approach #1(DOM focused approach)
- look at approach #2(data / declarative view approach)
Neither approach is ideal!

After looking these approaches, we're gonna walk through how react gives us the pros of BOTH approaches without the cons of either approach.
So why do we need react?
DOM refers to web browser's model of the actual content or the elements on the page.
Important: With dom focused approach, the actual html elements are the source of truth or source of data for our application.
So for example in this approach, when you submit a form for creating a new item, instead of adding that new item to a raw JS array of data,
this DOM focused approach, literally just adds a new <li> to <ul> and the same is true for deleting those <li>s. So instead of removing an
item from a raw JS array of data, we're just literally removing that <li> from <ul>(because they're the source of data) and because we wanna
persist our data even if you reload the page, we're using the web browser's local storage(so we're saving the data in local storage, each time
you create or edit or delete, we save ALL of our data to local storage and first when you reload the page, we pull that data from local storage).

Now this NEED to SAVE and LOAD DATA begins to really show the problems with this DOM focused approach. Because we don't want to save
the actual html for that entire <li>s, we only wanna save the actual text values for each item. So in JS in this approach,
we have to perform a weird awckward dance with the DOM and we're saying select all of the <li>s in the <ul> and loop through them and ...
get the text value and that way we can save the array of text values of those elements in the local storage.

The disadvantages of this approach:
1- Working with the DOM is relatively slow even on the fastest computers in the world, whereas even on older slow computers, the browser's ability
   to work with raw JS DATA is blazing fast.
   Important: Therefore, whenever possible, if we can avoid working with the DOM, we absolutely should avoid working with it!
    Therefore, it's not ideal for the dom, to be our source of truth or source of data.
   So that's the first problem with this approach.
2- The second HUGE problem is that the code that makes up our user interface is fragmented all over the place and we end up having to
   babysit tons of different elements manually, instead of just having one convinient centrally located place for our UI.

Now, yes, this approach works for very simple apps, but as soon as complexity grows, it becomes a nightmare to have to mentally keep track of
where you are manually babysitting each element in different locations throughout your code.

data/declarative view approach:
(remember: neither of these two approaches are using react or any other library and they're just plain JS)
We created a function named render() and there, in one centralized location of code, our entire UI is declared. For example there, we're
looping through our data and outputting an <li> and when the form is submitted, we call submitHandler(event) and in that function, you can
see, that function is not babysit the DOM or DIRECTLY worry about modifying the DOM in anyway. All it does, is take a raw JS array of data and
push a new item onto that array and once we've done that, we're calling saveData() which is gonna save it to localStorage, but also, the saveData()
is gonna call the render() and we're taking the same approach when someone clicks on the delete button. So instead of manually babysitting any of
the elements, we're just gonna remove that item from our raw array of data and then run the render() again.

So whenever we modify our app's data, we call that render() function and render() has our entire UI declared in one convinient location.
This approach, lets us keep things more organized and we don't have to do any awckward dancing with DOM, because the DOM is not our source of
truth, instead, our raw JS data is the source of truth. However there's one HUGE problem with this approach that is even bigger than any of
the problems with the first DOM based approach and that is:
Important: Now whenever ANY data changes in our app, we're re rendering the entire app and remember that working with DOM and telling DOM to
 rerender or repaint content is very slow.
So even if we really need to update the text for one item or just delete one of those items, our ENTIRE app gotta get re rendered and that's a
performance and speed nightmare and it's gonna result in an app that feels slow, unresponsive and just weired for end user.
Now if we contrast this with our first approach, in the first one, when we added a new element, we ONLY rendered that one specific new element,
or when we deleted an element, we actually just removed that one <li> from the page. Because we only manipulated the one tiny piece of the DOM,
that ACTUALLY NEEDED to be manipulated, because it was now DIFFERENT. That's what we want to do. However, that's really the ONLY area which that
DOM focused approach excelled, everything else about this approach feels messy abd unorganized.

So aside from that one HUGE performance issue with the second approach, it seems like the second approach is the clear winner.
So the question becomes: Is there any way that we can get the best of both worlds of these two approaches?
Yes, this is exactly where react comes into play.
react is closer to the second or the data declarative view approach.
So with react, imagine if we could declare our interface in one centralized place and then whenever the data for our app changed, instead of the ENTIRE
interface getting re rendered(like the html inside render() function), somehow magically, only the exact tiny pieces of the DOM that
ACTUALLY NEED to DISPLAY NEW OR CHANGED content, only those little pieces actually get manipulated in the DOM.

So we can just worry about our app's data and our UI will automagically react to that data. So that's the problem that react solves.
It lets us keep our data outside of the DOM, so that working with the data is simple and blazingly fast and as our data changes, it reacts by
re rendering ONLY the exact tiny pieces of the DOM that actually need to be re rendered, because they're now different now. */
/* 2. 2. Let's Start Using React:
In codepen in settings of js tab and in "add external scripts/pens" search for react and react-dom. When we're using react withing the context of a
web browser(in a web application), we need to import react-dom too.

render() of ReactDOM, takes 2 args. The first arg is what you want to render and the second one is WHERE you want to render it to?
In React.createElement() , we give it 3 args. The first arg is the type of element or component that you want to create and the second arg is
properties or props or if it doesn't have, just write null for it. In third arg, we define content or children that should live in that element.

There's an easier of creating react elements that we would look.

An element that we're creating with react, can only have ONE top level element. But one top level element can contain as many children or nested
elements as we want it to.

In setInterval() , the first arg is a function that you want to run and the second arg is how many milliseconds you want to wait before running that
function AGAIN and that's gonna repeat endlessly, until you unsubscribe.

If you create a datetime that gets updated every single second with react, if you highlight it, that gets lost every second(in setInterval() we use every
1000ms), but if you select other static content of the page, that selection doesn't get lost. The reason the selection of timer gets lost is because it's
having to be RE RENDERED every second.

So the real magic of react is that we declared our entire interface(layout) in one convenient location and then we're telling that entire layout
to re render, once every second, but it's not actually re rendering the ENTIRE thing. ONLY tha tone tiny little part of the DOM that ACTUALLY NEEDS
to get updated and replaced, is actually getting re rendered and this is amazing for performance reasons.
This lets us have the best of both worlds. A cohesive declarative view(with React.createElement()) and blazingly fast rendering performance.

In the third arg, we passed it an array to define the children of the div and those children are gonna created one after another in order we created them
in code.

EX) function OurApp() {
    return React.createElement('div', null, [
        React.createElement('h1', null, 'our amazing header'),
        React.createElement('p', null, `current time is: ${new Date().toLocaleString()}`),
        React.createElement('small', null, 'footer!!!')
    ]);
}

setInterval(function() {
    ReactDOM.render(React.createElement(OurApp), document.querySelector('#app'));
}, 1000);

html:
<div></div>

In real world, devs don't use this syntax! Instead we use JSX. Behind the scenes, jsx is just gonna convert the code that looks intuitive, into
code that looks exactly like the above(multiple createElements() and ...)

3. 3. What Is JSX:
That React.createElement() syntax feels really verbose. In codepen, go to settings, then in javascript preprocessor select Babel and now we're
ready to use JSX. Now empty out the entire body of the OurApp() function and then return the jsx which has ().

function OurApp() {
    return (
        <div>
            ...
        </div>
    );
}

JSX looks like html but it's not!
JSX is syntax extension to javascript and behind the scenes, it's gonna converted into a bunch of different React.createElement()s but we don't
need to worry about that. One similarity between jsx and the previous approach of writing react code, is we only have ONE TOP LEVEL element.
That's why we have that wrapper <div> as the top level element in our previous example.
1) BUT we can actually get rid of the word div in that wrapper in our previous example. So now it would be <> ... </> and this is what's referred to
as a react fragment. So this way, react won't output an unnecessary wrapper <div> into your markup but technically for the sake of react, we still
just have tht one top level element but it's now empty!, therefore in jsx we can empty out that wrapper top level element, but in React.createElement().
we can't do that.
2) Another difference is if we wanted to add a class to elements. class is a reserved word in JS and JSX is actually just JS. So instead we would say:
className="".
3) In React.createElement() we were inside a regular string of text so we could use `` and ${} , but here, we're not in regular javascript, we're
within JSX and in JSX when you wanna include a bit of ACTUAL regular JS, you need to include {new Date().toLocaleSting()}.

Now if you select ENTIRE html, which that html has some static actual html and also has some react {} which is a dynamic stuff and would re rendered
by react, if it is necessary, because of new Date().toLocaleSting() , it appears as if it's not even re rendering.
However, if you select JUST the part of the time portion which is re rendering by react, you can see that your selection is lost and it's INDEED being
re rendered. So if you select the static parts of html, the selection won't lost, so you can see the ENTIRE view is NOT being re rendered. Therefore,
all of the benefits of react are still present, but we're just using JSX instead of bunch of React.createElement() .
Also since our codepen is now setup to use babble, therefore, can use JSX, and when we're ACTUALLY RENDERING our component, by using
ReactDOM.render(React.createElement(OurApp), document.querySelector('#app')) , we can simplify that as well. Because JSX is in the picture,
we can delete React.createElement() and instead, we can just include sth that looks like an opening html tag or in better words, a self closing html tag.
So use: <OurApp /> So that looks sort of an html tag, but it's the JSX way of rendering a component with it's name which in this case is OurApp.
Next we're gonna stay organized by using: Components using other comps*/
/* 4. 4. Staying Organized Components Using Other Components:
In react, break down your code into single responsibility comps. So maybe right below OurApp() function, create a new function named OurHeader().
Now if we wanted to have multiple lines of jsx, you should use () and then you could dropdown, but if you're only gonna have a single line or a single
element, you don't need (). Then use that new comp in OurApp() , by saying: <OurHeader />
So our main comp, which in this case is OurApp() , just references or points towards that new comp. So that OurApp() comp is still our one centerally
cohesive place to assemble or define our interface but pointing or leveraging other comps within that OurApp() comp, let's us stay organized.
EX) function OurApp() {
    return (
        <>
            <OurHeader />
            <TimeArea />
            <Footer />
        </>
    );
}

props let us pass data into a comp.

5. 5. Using Props To Make a Component Flexible:
In react, when we create a comp, we essentially are creating our own custom element type, only we're not limited to the specific attributes that
html allows, in react we can use props to give any attribute or piece of data to any comp.
Important: Just like we can add attrs to a traditional html element, well, in react we can essentially just add attrs to our comps.
EX) <Pet name="x" age="2" />
    <Pet name="y" age="4" />
In this example, name and age are props(it's better to call them props instead of attribute) that we're giving to this component or passing into Pet
component.
Now how we USE these pieces of data(props) within our comp?
In Pet comp function and in it's (), we just include A parameter. So add props parameter to that function.
EX) using given props to a comp, inside the function of comp:
function Pet(props) {
    return <li>{props.name} and {props.age}</li>;
}

Now what if we had 300 Pet comps and we wanted to list them in OurApp()?
We couldn't do it manually just like what we're doing and also we couldn't manually feed in the proper values(props) for each of those 300 <Pet />s.
Instead, when you're working with any decent amount of data, you're usually gonna be given(someone given that to us or ...) an ARRAY of data, or a
big CHUNK of data and you would wanna PROGRAMMATICALLY loop through the array and do sth once for each item in the collection or array.
So that way, even if our array or collection of pets had 3000 pets, we wouldn't have to list things out and give them props like the way we're listing
two of them in example, manually. So we're gonna look at loop through collection(or an array of items) within the context of JSX and we want to
automatically or programmatically render the Pet component once for each pet and feed it the appropriate data or props.

6. 6. Looping Through An Array Within JSX:
*/
