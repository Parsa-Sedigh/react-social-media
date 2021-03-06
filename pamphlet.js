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
How to programmatically loop through a collection of data within the context of jsx, in order to render one comp for
each item in the collection(render a comp, once for each item).

To include JS, we use {}.
We don't have to do anything to convert the array that we're using in jsx, into a string. Because it's ALREADY JAVASCRIPT. That's the beauty
of JSX. It's not like at the end of defining that array, we had to say: .join() to convert it into a string. The point is, within JSX,
we're free to include JS within {} and then you can LITERALLY just include an array of elements or an array of comps and that would be already
show in the result.

EX)
<ul>
{[<li>hello</li>, <li>hey</li>]}
</ul>
This would show the hello and hey html! Without having us to use .join() to convert it into string.

When you write: const data = [...];
this is not the ideal way to store data in memory with react. We'll look at reactish or component way to store app data.

The function that we pass to map() is gonna get called, once for each item in our collection or array that we used map() on that array and
map() is gonna assemble or generate a new array and within the body of that passed function, whatever we return, is what's gonna get
added onto a brand new array that map() returns. Withing the () of function that we pass to map() , we want to add a param that we can name it
anything. Now within the body of the function that we pass to map() , we can access the CURRENT element that has been looped to, via that
parameter name.

If the body of our function only contains one statement or one line of code, we actually don't need {} around the body of
the function.
If the body of your function sits on the same line, you actually don't need to include the word "return". It's just implied or assumed.

Important: For internal react performance reasons, we do want to include a prop named key. In our example, each pet has a UNIQUE id value.
 The idea is that react has this unique identifier or key, to track each component or each instance of the comp.
EX)
{
    pets.map(pet => <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} />;)
}

state, is how we store the data of our app in MEMORY, with react. State really brings us back to the defining characteristic or the most impressive
part of react and that is that: as our state data changes, react AUTOMATICALLY re-renders our interface for us, without us needing to
manually call render() again, like we're currently doing at the examples above. Because currently, we're manually calling ReactDom.render(...) and
re-rendering our app in setInterval() . This type of setup works but it's not typical or standard or ideal way of setting up react.
Actually, we don't need to worry about calling render() more than once. We can just render our app once and then if we ever update it's state,
react is smart enough to know to re-render again on it's own.*/
/* 7. 7. State:
Currently, we set an interval and then we're manually calling ReactDom.render() once every second and that's what allowing our time to update
every second. Now EVEN though we're manually recalling that ReactDom.render() , that setup is actually NOT bad for rendering performance.
The setup is:
setInterval(function() {
    ReactDom.render(<OurApp />, document.querySelector('#app'));
}, 1000);

Because react is still smart enough to perform it's internal comparisons, ONLY ACTUALLY re-render the tiny parts of the DOM that ACTUALLY NEED to be
re-rendered.
That time value is a piece of state(or a piece of data) in our app. There are tons of different types of events that could happen, that could
CHANGE state or that could change our app data.
Now in our example, so far, the only type of event that we've accounted for is the passing of time. Every one second that time value is gonna
different, so then we're re-rendering(by using setInterval() and in that setInterval() the interval is 1000 and re-rendering means: ReactDom.render()).
So in that sense, this manual approach of setting an interval of 1 second and re-rendering manually, this works, but what about other types of events
that can CHANGE DATA?
For example, a user could click on a button or scroll the page or type letters on their keyboard, the whole idea with react is that you and
I don't want to have to baby-sit that render() method. The whole idea behind react is that, we just worry about managing our app's data or
the app's state and then as that state CHANGES, react AUTOMATICALLY re-renders things on it's own, we don't have to keep telling it to render at
the appropriate time! We JUST tell it to render once when the page first loads and EVERYTHING beyond that is up to react.

So the question is: How do we USE state? Or how do we access state? Or how do we start working with state data?
You've heard me say that many times, that we can store our app data in state, but how we actually tell react to store sth in it's state?

Before we start using state, let's set this up so that this actually doesn't get called once every second. So instead of using ReactDom.render() inside
a setInterval() , get rid of that setInterval() and just use that ReactDom.render() without anything else.
But now you see the time is not actually getting updated every second. Because we're only rendering once, when the page first loads(when the page
loads, that line which saying: ReactDom.render() is executed and the time IN THAT MOMENT renders, but it would never gets updated or re-rendered again,
until the page loads again and that line gets executed.)

Let's adjust our TimeArea component, so that it stores the current time IN STATE and then whenever we change that state value, react will just
AUTOMATICALLY re-render that for us.
React library has a function named useState that lets us begin working with state data.
All we're doing on this below example is saving ourselves a bit of typing down in our actual code.
So instead of having to type React.useState we can just say useState, by assigning React.useState to a variable.
Currently, because we're in codepen, we don't need to import useState .
All you need to know is now we have this special react tool or react function named useState which is stored in a variable.

In useState() we give it an initial value, in this case, we give it the current time. Now react is gonna store that current time value(initial value
that we passed to useState()) in a memory cell. So it's going to store that little piece of state or that little piece of data for us.
Now that's great, but you and I need a way to HOLD ON to that place where it's storing the data. We don't just want this(useState(<initial value>)) to
sort of flow of to outer space where ONLY react can access it, WE need a way to work with it. So, let's store whatever useState() is gonna
return in a variable, so we can access it later on. However, useState() does not just return a single entity. It returns an array with 2 items in it.
The first item in the array that it returns is sth that will let us access that current value and the second thing that it returns to us
is a function that we can call to UPDATE the value of that little piece of state data(that we passed to () of useState()).
So we want 2 variables to store the result of useState() . So we should destructure the array that useState() is returning. In [] which is
result of useState() , you can make up any two variable names that you like to make up.
In our example, theTime is how we can ACCESS the state value and setTheTime is how we can UPDATE the state value from it's initial value that
we declared in () of useState().
We use {} in jsx to do sth dynamic. Now use theTime in {} jsx.
Now if you see the results, you can see that things are still working but the time doesn't update every second.
Within our TimeArea component, we just want to WAIT(setTimeout()) 1 second and then UPDATE that piece of state data. So use setTimeout() and ... .
The second arg is how many miliseconds you want to wait, before calling that first arg function, ONCE. So in first arg in this case, we included
an anonymouse function and there is where we can leverage setTheTime() and in () of setTheTime(), we give it the NEW CURRENT time value.
With that, once again, our time is updating every second.

When the page first loads and react renders TimeArea() function for the first time, it's going to see useState() and it's actually going to store
the initial value that we passed to () of useState() in a memory cell. Then, we told our code to wait 1 second, before we call setTheTime() which
is going to update that value in state(that value is the thing we passed as arg to useState()). Now when the state of a component changes,
react is going to run that comp again. So that means, our TimeArea() function is going to run again in response to that state changing which that
state changing happens when we called setTheTime() .
So yes, technically the line of code where we say: const [theTime, setTheTime] = useState(...);
is going to run AGAIN(because as I said, TimeArea() component which that line is part of that component, is going to run again), BUT react is NOT going
to actually set that initial value that we passed to useState() as the value AGAIN! React is SMART enough to know that this is NOT THE FIRST TIME
that we're running that useState(...) and it's ONLY going to use that value we passed to useState() , as the INITIAL value that we first declared.
React can keep track of the fact that this is NOT the first time that this component is rendering, therefore we don't need to redeclare the initial
value of that piece of state data, however, it IS going to run all of our other code again and it's going to say: Hey, let's wait 1 second and
update it again(setTheTime()) and that process is just going to repeat endlessly(in our example not always!) and that's why we have a timer
that keeps going on.

setTimeout() is not the most optimal or ideal way of updating sth, once per second like this. We'll look at a react tool named useEffect which
will let us set up this timing situation(setTimeout(...)) in a more optimal fasion.

So write:
const useState = React.useState;

function TimeArea() {
    const [theTime, setTheTime] = useState(new Date().toLocaleString());
    setTimeout(function() {
        setTheTime(new Date().toLocaleString()) // state is changing here
    }, 1000);
    return <p>The current time is: {theTime}</p>
}

This lesson was an example of updating state in response to the event of time passing.

Let's look at the respond to the event of a user clicking on a button.
We're gonna store that count or that number in state. This should feel like a much more natural or practical example of why state is so useful.*/
/* 8.8. Handling Events (Like a Button Click etc...):
Let's look at how to respond to events.

Now before we actually modify the JSX for our OVERALL interface(the component which we insert all of our comps in it and call ReactDom.render() for
that overall comp which in this case tht overall comp name is OurApp() ), let's go create a comp named LikeArea() .
Because we want to include multiple elements or multiple lines of code, let's return () for JSX and there, let's start with an overall react fragment.
Important: WHY? Because you can only have 1 top level element in a bit of JSX. But now within that react fragment, we can have whatever content we want.
So currently our returning jsx in this comp is:
(
    <>

    </>
)

function LikeArea() {
    const [likeCount, setLikeCount] = useState(0);

    function increaseLikeHandler() {
        setLikeCount(function(prev) {
            return prev + 1;
        });
    }

    function decreaseLikeHandler(prev) {
        setLikeCount(prev => {
            if (prev > 0) {
                return prev - 1;
            }
            return 0; // this way we don't let the user click to a negative number(the lowest it lets me go is 0).
        });
    }

    return (
        <button onClick={increaseLikeHandler}>Increase likes</button>
        <button onClick={decreaseLikeHandler}>Decrease likes</button>
        <h2>This page has been liked {likeCount} times</h2>
    );
}

Now that we have this set up, let's go include LikeArea() comp within our overall OurApp() comp.
So:
function OurApp() {
    return (
       <>
       ...
       <LikeArea />
       ...
       </>
    );
}

For responding to button clicks, add an attr or I should say, a prop or property with specific name of onClick. You COULD just type out
an anonymous function directly in those {}. But we can inside the LikeAre() , create a new function.

Now we need to SETUP that number of count as a piece of data that lives in state. So we must use useState in LikeArea() . useState(0)
Then add an initial value for the like counter. So react is gonna take care of storing that value, but we want to be able to access that,
later on. So at the start of that line, let's say: const [] = ... .
The first variable in destructured array of useState() , is how you can ACCESS the piece of state or the value and the second variable is a
function that lets us UPDATE that same piece of state.

For calling setLikeCount() , if we already knew the EXACT VALUE we want to set it to, you could just type that value in () of setLikeCount.
However in this case, because we want to base our value off the previous value (we want to increment it by 1), what we can do in () of setLikeCount,
is to include a function.

So yes, we know that the very first time the user clicks on increase button, that the previous value of likes would be 0(which is the initial
value for likes that we specified in () of useState()). But the idea here is, what if the users already clicked it a few times?
In that case we would need to KNOW the previous value or state(which in this case, the state is number of likes), so we can add one to it. Therefore,
because we want to know the previous value, we included a param in function that we passed to setLikeCount().

The new value that we returned from the setLikeCount() , is going to be set as the new like count within our state or app data.

We used {} for value of onClick, because we want to point towards the name of a js function instead of just a string of text.

Since we want to work with the previous value, we're gonna supply a function within () of setLikeCount().

So we responded to a user event by changing state and then react responds to the state changing by re-rendering ONLY the tiny part of the DOM that
actually needs to be updated(because of state changing).

With forms we can practice working with state again.*/
/* 9. Working With Forms:
EX)
function AddPetForm() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>Add New Pet</legend>
            <input placeholder="Name" />
            <input placeholder="Species" />
            <input placeholder="age in years" />
            <button>Add pet</button>
            </fieldset>
        </form>
    );
}

Right below OurApp() function, paste this new function. So in a brand new function that is not nested in any other function.
Now let's leverage this new comp. So add it in OurApp() returning jsx. Like: <AddPetForm />

Whenever you submit a form in a web browser, the web browsers default behavior is to send that data off to a new URL or to a new location.
But we don't actually want to reload the page. So we want to prevent that default behavior of the web browser. Now that event(e) parameter
contains all sorts of information about the form submit event that just happened.

Now what do we actually want to do when user submits the form?
From a react perspective, we'd want to take the values that they entered and update whatever STATE IS DRIVING that list of pets, to now include
the data that was just typed and submitted into those fields. To make that happen we actually need to step back from the form for a minute and
we need to move our pet data to live inside the STATE of our OurApp() comp. Because currently our pets array data, is not living inside any
react functions(comps). So we want to move that data to live within STATE, within OurApp() comp.

So by saving(useState([...])) that pets array data as the initial state inside OurApp() comp, now react is responsible for storing that data.
But remember, we want to be able to access that data again later on. So at the start of that useState() line, say: const [...] = useState(...);

const [pets, setPets] = useState(<pets array>);

So ultimately within our app, you can still access the pet data from a variable of pets. Only now, we have a function named setPets that we can
call to update that pets piece of state.

We're not actually gonna push or mutate that array that we passed as initial state to useState() , instead, we're gonna give a new array to react
and react can handle things from there. But the idea is that once we update that state, react will take care of re-rendering that part of the
DOM which those data are shown in that part. I won't even need to re-render any of the list, it will just render the NEW ELEMENT that we just
added to it.(so the whole list won't get re-rendered again)

handleSubmit() function is where we would want to update the STATE of the list of pets.
However, this is the first real roadblock in react. Currently if you go to WHERE WE SET THAT STATE(pets) UP, which is in OurApp() ,
you can see setPets function that would allow us to update that state. BUT that is only available within that OurApp() function and we can't
access it from the form component. At the moment we have no way of accessing that setPets function from within our AddPetForm() function.
(But why on the earth we placed array of pets in OurApp() and not other places? Because in jsx of OurApp() is the place where we're mapping
through those pets and render them, so we need that data in OurApp()).
There are many ways to get around this issue in react. The simplest one is:
Within our overall OurApp() function in the JSX code, when we're rendering the AddPetForm comp, we can give it a prop of that setPets function.
We can give that prop any name, for example setPets.
EX)
function OurApp() {
    ...
    return (
        ...
        <AddPetForm setPets={setPets} />
    )
}

Now let's go to AddPetsForm() function and leverage that by including a props parameter in order to RECEIVE that props.
Now within the () of setPets() , we know that we want the new value(new values of submitted form) to be based on the previous value.
So we're gonna give setPets() a function. Why we needed the previous value(which prev value is the old array of pets in this case)?
Because we want to create a new array based on the old array, so we want to clone the old array and add a new element to it, so we want
to access to previous state, so we have to give setPets() a function with prev parameter.

We don't modify the state directly, because essentially in react you don't want to directly mutate the state, you just want to give react
the new desired value and let react handle things from there. So we can begin working with the old array, only instead of using a method
like push() which would directly change that array, we can use concat() which returns a brand new array instead of modifying the old(which in this
case that old array is prev) and we just give it a new item that we want to combine with the old array.


ex)
function AddPetsForm(props) {
    ...
    props.setPets(prev => prev.concat({name: 'test', species: 'dog', age: 2, id: 123456}));
}
Now instead of that hard-coded values let's actually pull the values that user has entered into the fields.

Important: In react, the DOM is never our source of truth, so we're not gonna manually read the values from those fields(directly from the
 DOM), instead, we're gonna listen for the event that the value of a field changes and then every single time a field changes it's value,
 we're gonna store it's NEWEST value in state, so then that way, when user actually submits the form, we don't need to go retrieve any
 values from the DOM. We can just work with data that is ALREADY in state.

So within AddPetForm() , we want to create 3 new pieces of state. So we're gonna create 1 piece of state for each of the 3 fields:
const [name, setName] = useState();
const [species, setSpecies] = useState();
const [age, setAge] = useState();

Now let's use these functions that let us update state whenever one of the fields changes their values.

For onChange value, we could create a function with a name and then point towards that function, or we can just include an anonymous function
there. in e.target.value , e is the event that just occurred, target is the element that just had the event happened to it and then
we're just grabbing the value from that input field.

e in the onChange below, contains all the information about the keypress event that just happened.
<input onChange={e => setName(e.target.value)} placeholder="name" /> and do the same thing for other inputs.

At this point, we can rest assured that our state always has the most updated values from those fields.
In modern js, when the name of your prop is the same thing as the value that you want it to have, you can get rid of the value and colon and
you can just write the property name.
Date.now() would give a unique number each time you create a pet.

So now in handleSubmit() we can say:
props.setPets(prev => prev.concat({name, species, age, id: Date.now()}));

Let's clear the old submitted values from form. Let's update the states to an empty string and we didn't want the previous state, so
I didn't give those state functions a function as an arg.
setName('');
setSpecies('');
setAge('');

Now we need to tell those input fields in our JSX to actually use the state as their value. So:
<input value={name} onChange={e => setName(e.target.value)} placeholder="name" />

So now after submitting the form, those fields were automatically cleared out.

We'll look at when you reload the page, any new data that you added is not lost in the next vid. That feature os persisting the data
doesn't have anything to do with react, but we're gonna look at it, because it's a great excuse to look at a tool in react named useEffect() .
useEffect doesn't inherently have anything to do with persisting data. useEffect is a very useful tool that can be used in a million different
types of situations.*/
/* 10. What is UseEffect:
Let's add a delete button next to each of the pets in our list. So go to Pet(props) comp.

If you want to have multiple lines of jsx, you need to wrap that jsx inside () .
Within handleDelete() function, this is where we need to stop and actually think about what were trying to accomplish?
What we need to do is determine the id of pet that we just clicked delete on and then we want to go into the state of all of
our pets, find the item that has that matching id and remove it from array.
But first, let's go to OurApp() and give it a prop of id which has a value of pet.id and then we need to realize that we want to
be able to update the STATE of our pets from within the Pet() comp and remember that state of all of our pets actually lives in the
OurApp() comp, not the Pet() comp. So while we're in OurApp() , let's also add one more prop named setPets and set it to setPets function that
updates the pets state. The setPets is a react function that lets us change the state or update the state.
Now let's back to Pet() .

In handleDelete() , we want to call props.setPets() function. Because we want to change the state and in this case, we want to
remove an item from that array of pets which is in state. So in () of setPets(), it's our job to give it a new array with all the
pets except for the one that we just wanted to get rid of. That means we're gonna need to work with the PREVIOUS STATE VALUE. THEREFORE,
WE GIVE THAT UPDATE FUNCTION, AN ARROW FUNCTION, with a param named prev. Important: That prev param is the previous state.
And again, we don't want to call any methods on that array that would mutated or directly change it.
Instead we can call filter() .
Every array in JS has access to filter() and it will return a new array. You give it a function and it's gonna run that function, once for
each item in the array. Now in that function, if you return a value of true, that current item you've looped to, will be INCLUDED in the
new array that filter is generating. If you return a value of false, it will be skipped. So all we need to do is provide a function that
returns true unless the id of the pet matches the id of the pet button that we just clicked on. So within () of filter, let's add an arg
named pet in order to work with the (CURRENT) pet that we've looped to and we're gonna return true if: pet.id !== <the id of pet that just
clicked on> .
and react will take care of everything else.

function Pet(props) {
    function handleDelete() {
        props.setPets(prev => prev.filter(pet => pet.id !== props.id));
    }

    return (
        ...
        <button onClick={handleDelete}>delete</button>
    );
}

Now when the page gets reloaded, we don't lose our data. Go to OurApp() comp and let's make it so that when you first visit the page, none of
those pre-existing or hard-coded pets exist. So delete all of the pets that are inside [] of useState() . So now we have:
const [pets, setPets] = useState([]);

Now when someone adds a pet to the form, not only do we want to add that new pet to state but we want to somehow persist that data in the
web browser, so that even if you reload the page, that data still exists. Even though that's more about web browsers and less about react,
let me show you how we will achieve this within the context of react.
So right below of line where we're setting our pets state, add two comments.
Then we're gonna leverage the web browser's local storage feature. Local storage is how we can have persistent data within a web browser.
So the very first time our comp is rendered, we're gonna load any existing data from local storage and load it into state. But then we also
want to save our latest data back into the browser's local storage. So any time our pet data changes, we're gonna save our pet state back
into the browser's local storage.
Now this whole situation of needing to do sth during a certain circumstance like this, is where useEffect comes into play.
Now just like we needed to include or create a shortcut named useState(that we did at very top which was: const useState = React.useState),
we need to do the same thing for useEffect. So: const useEffect = React.useEffect;
Now we can access it by JUST typing useEffect.

We want to give useEffect() 2 things. The first arg is a function that you want to run and the second arg is where you list the dependencies or

the things that you want to watch for changes and then only when react detects that those things have changed, only then will call your function.
In first useEffect() , we only want that first arg which is a function to run, the very first time that this component is rendered.
Now to do that, for the second arg, we just provide an empty array.

Now for the second useEffect, we want it's first arg to run, every time our pet state changes. So for second arg, we would have an array
and the only item in that array that we want to watch for, is our pets state. So include pets in the array.

Important: By default, any code that lives within a component function is going to run every time that component gets re-rendered.
 So useEffect is our way of including code WITHIN our comp but only actually running it at the specific times that WE WANT to run it.
Now let's focus on the function that we want to run, ONLY the first time that the component is rendered. So for first arg of first
useEffect() , give it an arrow function. Do it for the second useEffect() too.

First let's work on the first arg of second useEffect. If the pet data(state) changes, we would want to save it to the web browser's
local storage.
localStorage is a universal web browser feature. The first arg of setItem() is a name that you make up for that piece of data that the
browser is gonna store. For second arg we would want to store our pets data(for the second useEffect). However, our pets data is an array,
whereas localStorage in the browser ONLY accepts a simple string of text, not actual code or data. To get around this, what we can do is
is using JSON.stringify(). JSON.stringify() is a web browser feature that will turn our data into a string of text.
So now react will take care of running that function we passed to second useEffect() , each and every time our pets state changes.

Within the first useEffect, we only want to run it when that comp is first rendered(for the first time) and that's where we would want
to load any data from the web browser's local storage if it exists.

setPets() is the function that lets us update our pets state within the comp(or you can pass it to other comps and update there as well).
Before we pull in the data from browser's local storage, we would first want to parse it, because remember what's stored in the web browser
is just a string but we want to parse it, so that it's actual JS data so that it's actually an array of objects.

Now, if you reload the page, that new data is still there.
so even you close your codepen in even week or two from now, that data would persist and even though persistent data has nothing
to do with react, you can see how useful useEffect() hook function can be.
Important: Since everything in react is based around our state, it's powerful to be able to run custom functions WHENEVER A CERTAIN
 PIECE OF STATE CHANGES(that certain state is in the second arg of useEffect()). That's why useEffect() is so great.

// Only run once the first time this component is rendered
useEffect(() => {
    if (localStorage.getItem('examplePetData')) {
        setPets(JSON.parse(localStorage.getItem('examplePetData')))
    }
} , []);

// run every time our pet state changes
useEffect(() => {
    localStorage.setItem('examplePetData', JSON.stringify(pets));
}, [pets]);

Now let's improve our TimeArea() comp by leveraging useEffect() . Currently we're using setTimeout() and we're waiting 1 second before
we update the state with the new time and that's gonna cause TimeArea() function to re-render again which is gonna run that setTimeout()
again and that's gonna create sort of an infinite loop of that.
So instead of us needing to constantly re-create a new timout and again, re-create a new timeout, it would be more efficient if we used an
interval instead of a timeout.

An interval is just an ongoing instance in the browser that's gonna fire the function(we passed to it) once every second in this case.
Now in the past, before we knew about useEffect() , we COULDN'T use  setInterval because, remember TimeArea() function is gonna re-run everytime
the state changes and we wouldn't wanna have an ongoing or infinite number of intervals going on. HOWEVER, with useEffect() we can run a
bit of code ONLY the first time this component renders and create a new interval every time that component re-renders(which is the result
of using just setInterval()).
Important: When you want to run a piece of code ONLY the first time a component(sth) renders, you need to pass the second arg of useEffect() , an
 empty array.

In setInterval() , the second arg is how many milliseconds you want to wait in between each call(interval) and the first arg is a function
that you want to run.
So instead of setTimout(), write:
useEffect(() => {
    setInterval(() => setTheTime(new Date().toLocaleString()), 1000);
} , []);

With this, our timer is still working, only now the web browser isn't having to CONSTANTLY RE-CREATE a timeout and again RE-CREATE a timeout
endlessly. Instead, there's just one interval that continues to run, but our code isn't going to continually RE-RUN that and RE-CREATE NEW intervals,
because useEffect() is only gonna call that setInterval() line, THE VERY FIRST TIME our component renders. So we would have just 1 interval.
Now this isn't super crucial in this simple app but in the real world, whenever you're doing sth in the future, you want to be able to cancel it
or negate it, if that comp gets unmounted or removed from the page before that action(like setInterval()) completes.
So for example if our app was more complex and you could navigate to a new screen that didn't need to show the time, well, then that TimeArea()
comp would be unmounted or it would no longer be displayed and in that case, we would want to clear the web browser's setInterval() .
Because otherwise it would just be a waste of computer resources.
For that, assign that setInterval() to a variable and remember:
Learn: Whatever we return within our useEffect() function(first arg), is what's gonna be used as it's cleanup function.
We can use the web browser's clearInterval() function.
So within useEffect() function, you can return a function that react is intelligent enough to use as your cleanup function, so that if
that component which we used useEffect() in it, is no longer needed on the screen, the web browser has a way of cleaning up your side effects or
your effects.

ex)
useEffect(() => {
    const interval = setInterval(() => setTheTime(...), 1000);

    return () => clearInterval(interval);
}, []);*/
/* SECTION-2: 2. Getting Ready To Create a Real World App:
11.1. Text Editor:
In bottom right corner of vscode you see that it reads javascript. That's because our filename ends in .js . But jsx syntax is not
just standard JS and vscode actually comes with a special syntax just for jsx and react. So if you click on that bottom right corner,
it brings up a pallet where we can search for a different language or syntax and search for react and click on "Javascript React" and then
if we save our file and now if you literally write just: h3 in jsx and then hit tab, it would create <h3></h3>.
What this means is that because vscode is now aware that this is a "Javascript React" file, it can apply all of the same html helpers within the
context of jsx. So you can use emmet in jsx too now. So if you use write: div.special and then hit tab, it would create:
<div className="special"></div>
So as you can see, it EVEN automatically knows to use className instead of just class. However it's annoying to select that bottom right corner
and manually switch to Javascript React, everytime we open a file and you'll see if you close that current file which currently is Javascript React
and then reopen it again, notice in bottom right corner, it's BACK to just Javascript instead of Javascript React.
So it would be nice if we could tell vscode to just always treat .js files as Javascript React.
For that go to settings. Now for certain settings, you can definitely use that user interface(UI) to make your changes but in this case,
we actually want to just jump into the CODE FILE that DEFINES our settings. So towards the top right of vscode, you'll see that little icon and
if you hover over it, it says: Open Settings Json, click on that, create a {} and then type:
"files.associations": {
    "*.js": "javascriptreact"
}

Now even if you close js files and reopen it, vscode knows to treat it as Javascript React.

Tip: When you're coding, oftentimes your indentation is not going to be perfect. So it's nice to have a proper indentation, so use prettier that
we can configure so that everytime we save a file, it indents our code for us and it can also clean up our code in other ways.

Now we need to actually enable or begin using prettier. We want to jump into our settings one more time. So go to settings.json file and
then within the overall {} , but after files.associations curly brackets, say:
"editor.defaultFormatter": "esbenp.prettier-vscode",

so add a comma and then here's the really crucial option that if you don't have this, it's gonna be seem frustrating:
"editor.formatOnSave": true

Now you don't need to include these last few options:
"prettier.semi": false,
"prettier.printWidth": 9999

without that last option, prettier will adjust your code so that it drops down to a new line, instead of letting one line of code
get a bit long. We're not a fan of that feature so we just set it to a really large value.

This option doesn't have anything to do with prettier but just vscode in general, we want to set our indentation size to 2 spaces instead of 4.

"editor.tabSize": 2

12. 2. Quick VS Code Settings:
"prettier.arrowParens": "avoid",
"prettier.trailingComma": "none"
The first option will allow you to write an arrow function and if you have exactly one parameter you can skip the parentheses without
Prettier adding them in for you (which can be annoying). The second option makes sure you don't have unnecessary commas after the final property
when defining an object literal.

13. 3. Node.js:
In our case, we need node to combine react library with our own code that we write, as well as to transpile jsx syntax into regular js.
nodejs is like personal robot assistant and have it perform tasks for us, automatically.

After installing node, it's good to close vscode or maybe restart your computer and then try again.

14. 4. Setting Up Our Workflow:
When you install node, it also another command named npm.

npm init -y .
react package is the core react library and since we're creating web apps instead of native apps, react-dom is for web browser environment. So:
npm i react react-dom

Now create a folder named app. Any code that we write will go within app folder whereas the root of our project(folder) contains files with
info about our project. Now in app create: index.html and Main.js .

In vscode, you can setup skeleton of an html web page by typing: doc and hit tab. Now right before closing </body> tag let's pull in
our js file. So create a <script src="Main.js"> and then right ABOVE that <script> tag but still within the <body>, add an empty <div> that
our react code can hook onto or render into with an id. So: <div id="app"></div>
So then react can look for this id and render into that <div id="app">.
Now go to Main.js file.

The first arg we pass to ReactDOM.render() is the comp that we want to render and the second arg is the element on the web page that you want
to render it into(so you must have an already exist element on the page to render that comp into it.)
EX)
ReactDOM.render(<ExampleComponent />, document.querySelector('#app'));

Our work won't work yet! We don't even need to try to view index.html in a web browser yet to know that this won't work!!!
Because when we serve that Main.js to the public and web browser downloads it, well, sure, you and I have these packages on OUR computer in our
node_modules folder but the public viewer of our website won't have those react libraries. So the question becomes, how can we bundle up
those packages with the code that we actually wrote ? How can we bundle that up to deliver it to the viewers of our site?
Also let's not forget that the browsers will have no idea how to handle the jsx syntax.
So we need some sort of automated tool that can both bundle up our code with our dependencies(react, react-dom, ...) AND transpile jsx
into regular js that browsers can understand.

We use webpack. So let's use npm command to download webpack, webpack-cli, webpack-dev-server.

Now the question is how do we actually use or leverage webpack?
We need to create a file within the root of our project folder that tells webpack what we want it to do?
So don't create this file in app folder but in our overall project folder and name it: webpack.config.js and the name is crucial. Because
webpack knows to look for this exact filename.

In config of webpack, we're saying entry-point into our app is our Main.js file and then we want webpack to bundle up our code as well as
our dependencies that we import into a generated file named bundled.js . We're also setting up a development server on port 3000 and in
place where we're saying: @babel/preset-react ... , that's where we're taking care of jsx transformation. So the tool named babel is gonna
transpile jsx into regular js.

Now in order for our webpack setup to actually leverage those tools, we need to install them. So install: @babel/core , @babel/preset-env ,
@babel/preset-react babel-loaded .

At this point, our webpack setup now has everything it needs to do it's job and remember, it's job is to package up our code and our
dependencies into a new generated file named bundled.js . So let's go to index.html and let's get rid of <script src="Main.js"> and say:
<script src="/bundled.js"> and be sure to include / at the beginning here.

Now we need to do is come up with a way to tell webpack to start doing it's job. We need some sort of command to tell webpack to
start watching us and potentially bundling up our files for us. So go to package.json>scripts to create our own custom commands.
So create the dev script. Essentially what we did is create a command that we can leverage in command line that's gonna tell webpack
to begin watching us and serving up our files.
After running that command, we can go to browser and visit localhost:3000 .

Now after changing code, the webpack-dev-server just automatically reloads it for us, it refreshes the browser. We can take things even
one step further and instead of the browser automatically refreshing for us, we can set it up so it doesn't even refresh at all.
It just actually loads the new js on the fly, asynchronously. To do that, go to Main.js file and down at the very bottom of the file type:
if (module.hot) {
    module.hot.accept();
}

Now you might need to refresh just one time manually in your browser, you would never need to do this again in the future. Now after changes to
react comp, the browser doesn't even need to refresh, it actually just loads the newest js asynchronously, completely on the fly.

Now you might be wondering, where is the generated bundled.js file? Why don't we see that in our app folder?
Well, webpack IS generating the contents of that bundled file but it's really just keeping it in MEMORY and it's not even bothering to save it
to our hard disk,(so we can see it)! Webpack does this for performance reasons. It's even faster if it can JUST store that file in memory.
But when it comes to actually push our website up onto the web, at that point, we will indeed look how to setup webpack to actually SAVE the
bundled file to your HARD DISK.

I had to replace "webpack-dev-server" with "webpack serve" for "dev" script in my npm scripts.*/
/* SECTION 3- 3. Let's Start Building Our App!
15. 1. Starting Our Complex App:
You can use cmd+j to open terminal on vscode. npm run dev allows you to visit localhost:3000 to view your web site.
Then go to github of this course and grab index-guest.html and go to our index.html and paste all of the content of that guest.html file
and replace the current content of index.html and then refresh the browser manually, because our bundled code is no longer there.
Now grab main.css on github and create main.css in app folder. Now in index.html , where we're pointing towards main.css , at the
start of that address, add a forward slash / . This way, a bit later on, it will always look towards the root of our domain, so that file
will always successfully loaded.
You can see you'll do it correctly, if username and password fields at top, now have a dark gray background.

Now in index.html we want to leave all of that opening skeleton html but right inside the opening <body> element, we see header and select
all of it until end of footer and move it into react.

Also within the <body> tag, let's do 2 things(currently it should be an empty <body> pair of tags). First add an empty <div> with id of app.
and then below that, let's add: <script> tag that point towards our bundled js.

We used a react fragment, so that way we're not adding an unnecessary overall <div> to the page and inside that react fragment, paste the
html that you cut from body of index.html .

Now we need to convert all of the class attributes to className, because remember even though that LOOKS LIKE html, it's ACTUALLY JS and in
the JS language, the word class, is a reserved word.

In vscode you can just select the first instance of word class and then you can press cmd+d and that will select the next instance of that
selected word.

Then you might need to perform a manual refresh in the browser to see the changes.

Now to make sure that react is actually powering our website, we can adjust sth like headline really quick and with that, that proves us
that react is powering that interface currently.

In react we break things down into single responsibility or bite sized comps. So in app folder, create a sub-folder named components.
Now let's create a new file named Header.js .
Now before we worry about moving over the header related html or jsx, let's first get that new file ready to be imported within our main file.
So create a function named Header and below that function say:
export default Header.
This way, when our main javascript file(Main.js or Main.js) tries to import that Header.js file, things will work as intended.

Now let's go grab that header related jsx. After doing that, in Main.js(js) file, import that Header file and then write: <Header />

Currently if you see the console of browser, you see a couple of react errors and warnings, like "invalid dom property `autocomplete`" and ...
but if you use webstorm, you don't won't see them, because when pasting native html into jsx format, webstorm will take care of transformation
of html attrs into jsx specific names.
So go to header.jsx

Also another error was saying: the word "for"(which we used on <label> elements) is reserved in js language, in jsx, we must replace it with:
"htmlFor".

Now in browser if you refresh, you can see there are no errors or warnings in console.

Next, we're gonna look how to handle links or navigating to other screens within the world of react(SPA). For example, if we click
on a link, we wouldn't just want to load a new html page, because we wouldn't want our BROWSER to have to synchronously load a BRAND NEW
URL. Instead we want to use JS to load the data for that page behind the scenes or on the fly and then ONLY update the PARTS of screen
that ACTUALLY CONTAIN THAT NEW CONTENT. So we need react-router.*/
/* 16-2. Routing (Single Page Application):
What is frontend or client side routing?
What would happen when a visitor clicks on one of those links? So that means they want to switch to a new screen. So what would do as
developer of website want to happen in response to that?
We COULD use JS to load that new content and then display it there, but if that's all we did, we'd be forgetting about the most crucial
aspect of the web and that's the address bar or URLs. Because if someone visits about-us page, they should have a url of maybe /about-us that
they can share with others. or bookmark it. So we show the users the about-us content, we also want to make sure to babysit or update the
address bar.
Now in the past, traditionally when you visited a different url, your browser would load an entirely new html document from server and have
to completely LOCK UP the browser, while it receives and renders that entirely new page. However in modern era of web apps, we typically use
js to load new pages or screens. This is because JS can load the new content on the fly or in the background WITHOUT LOCKING UP the browser and
then once the data is ready to display, js only needs to update the SPECIFIC part of the page that is necessary. Overall, this creates a
much faster expreience for users.
Our goal is to set up the about-us page in url and others page in url. Now we're not gonna create new separate html pages aside from our
index.html . Since we're using react we don't need to rely on server side ROUTING. We can use client side or front end routing which
means react can simply show the appropriate content there, depending on the current url in the address bar. So index.html is used for
all of urls. Client side rendering gives us the best of both worlds. It gives us the speed of js rendering with all the functionality of
shareable and bookmarkable urls, as well as browsers back and forward buttons.

In a future lesson, we'll look how to create a reusable vscode blueprint, so you don't have to keep typing out that boilerplate for a new comp.

In github of this course, we don't need ALL of the html of about.html or other pages.

npm run dev would watch us and bundle our files.

After replacing <HomeGuest /> with <About /> in the video, you need to perform a manual refresh, because of the first visit.

Now we need a way to display the appropriate comp, depending on the current url. So install react-router-dom.

You can use {} in import to perform a destructure.

Currently, our jsx in Main.js is wrapped within a react fragment, why? Because sort of instead of a generic wrapper <div>, we're using that
syntax(<>...</>). That works perfectly. However now that we want to use react-router, we want to wrap our app within the router component.
So we might swap that from a react fragment to the browser router comp. So instead of a react fragment use BrowserRouter comp. So:
<>...</> ----> <BrowserRouter>...</BrowserRouter>

Now within our <BrowserRouter>, we don't need the header or footer to CHANGE depending on the current url. So we can leave the <Header /> and
<Footer /> in that place, but let's get rid of <HomeGuest /> or ...whatever is there and in the place of comp that we removed, let's add
a <Switch></Switch> comp. Now inside the Switch opening and closing tags, we list the different urls or routes that we want to watch for.

So for right now, we're gonna have 3 routes.

By using exact prop, our home page won't be accidentally shown for other urls.

Currently in our footer, we have <a> (anchor or hyperlink) elements which are designed with the old fashioned or traditional way of
linking to another page, meaning the web browser is gonna ask the server for an ENTIRELY NEW HTML document to render. That's not what
we want in this case, because we're not using server side routing for navigation. We wanna use client side rouging or JS routing(the react
router package). So what we need to do is convert those <a> elements from traditional <a> elements into link components that react-router-dom gives
us. So instead of <a> element, we use <Link> comp.

So even though we're currently giving the illusion of new urls, like if we click on about-us link, yes, we see that up in the address bar, but
that's really just JS and react performing an illusion. Because you'll notice that if I actually click up into the address bar with /about-us
and then try to press enter to send a new request to that url, you can see that doesn't work at all! It gives us: cannot GET /about-us .
That's because the SERVER doesn't have anything relevant for us at that url. So inorder for our client side routing to truly work, we need to
set up the server to ALWAYS send us index.html NO MATTER WHICH URL WE REQUEST and then it's up to our JS to display appropriate content based on
url.
So let's adjust our webpack dev-server(because we're currently on our local machine), to ALWAYS send index.html . So that someone could share
that url and actually visit it(like pressing enter in address-bar) instead of having to click on the about-us link from footer. So press
control + c to stop the current task(dev command) and then go to webpack.config file. In there, look for devServer property and after hot property
type:
historyApiFallback: { index: "index.html" }

With that, even if we send a COMPLETELY FRESH REQUEST(by pressing enter on address bar or refreshing that url) TO /about-us , the server knows
to JUST SEND our index.html and then from there, our react or JS code can take care of the rest. It knows that, this is the appropriate comp for that
url.*/
/* 17-3. React Developer Tools:
In elements tab you can see the html that our react and jsx eventually gets turned into for the browser to render. However since you and I are actually
putting together our app with react components not plain html elements, it would be nice if we could inspect our app in real time in the browser, BUT
from a react comp perspective instead of just a raw html perspective like elements tab.
That react extension, truly understands react not just the html that react renders. After adding that extension, you might want to refresh our app.
If that didn't work, you might need to close out that tab and reopen a new tab and then visit localhost. In components tab, instead of
final rendered html, we actually see the tree of components that our app is created from.
Later, when we start passing props into different comps, being able to view things like that can be useful.

18-4. Creating a Visual Studio Code Snippet:
Let's create a snippet in vscode. What if we could just type: rc(which is an abbreviation that we made up that stands for react component) and then
just hit tab and it automatically enters some code and it already selects the component name and the exported name of comp and then if we hit tab
one more time again, it immediately places us in the area where we're free to write jsx.

Whenever you want to add a new snippet to vscode, you want to begin by opening the command palette. You can open it by pressing: cmd + shift + p or
view > cmd palette and then type snippet there and click on: Prefences: configure user snippets and then it's asking us what type of snippet do
we wanna create?
Do we want it to be global, so that it's available from within any syntax or language? or do we want it to be specific to one language?
In this case, we want Javascript react syntax, so search for react and click on Javascript React and it should open javascriptreact.json
Within those {} we want to add our snippet. Go to repo of course/vscode-react-component.txt

In body prop of snippet, we specify the code that we ACTUALLY want. However, vscode does require, that a multi line snippet be
turned into an array. So we used [] in body prop and then each line is in quotes and this would be very difficult to type out on your own
manually. Also no one expects you to memorize the props that vscode wants you to have like prefix prop and body and description and ... .
A useful website whenever you want to generate your own new custom snippets which is snippet-generator.app . In there, tab trigger is your
abbreviation to hit tab on that.

Inside the {} of javascriptreact.json paste that code from github of course. If when you typed rc and then hit tab and nothing happened,
make sure tab your file is considered as Javascript React file in bottom right corner.

Currently, our 3 of our pages use a container, so we need a reusable container comp.

19-5. Create a Reusable Container Component:
All comps are reusable but by specifically saying reusable, I mean we're gonna make it flexible and work in multiple different situations.
Now you'll notice on our home page, the content(the main content not header or footer) is a bit wider than it is on the about-us page. HOWEVER,
they're both created by a <div> and a class of container. In real world, repeating those classes through all of the different comps is not that
big of a problem. However it would be nice if when we create a new comp, we didn't have to memorize those different classNames. It would be
nice if we could just wrap our content within a react comp named container and then depending on whether we need it to be wide or narrow,
we just give it an appropriate prop. The idea is we don't want to have to memorize all of those classes anymore.

When having props.children , react makes any nested jsx content available from within props.children prop.

Now if you use Container comp for home page, you notice it looks very narrow. Because our Container class by default has a class named:
container--narrow . But our homepage isn't narrow. So we don't want the homepage to use that narrow modifier class. So let's handle this
situation.
In HomeGuest comp, give Container comp a prop of wide and set that to true. Now in Container comp, we only want to add that modifier class,
only if the prop of wide doesn't equal true. There are many ways to make this happen. So for className of first <div> in Container comp,
we need a ternary operator to do sth different, depending on the value of the props.wide value. Also I put a space after py-md-5 class, because
whatever potential narrow class we add, we don't want it to be squished onto that py-md-5 class, instead we want there to be a space.

20-6. Quick Details & Composition:
Let's work on the title of the page we're currently on or title of document. Now with a traditional website that uses server ROUTING(NOT RENDERING!!!)
each time you navigate to a new page, it would load the nwe title value, but because we're using frontend or client side routing, the browser isn't
actually loading a new html doc on every page SWITCH. So you need to sort of babysit the document title.

For example, in About comp, we want to run a bit of code, but we ONLY want it to run, the very first time that comp is rendered. Because remember:
Important: If any state or any props from a parent comp change, that's going to re-render the component.
and in this case, we wouldn't want to needlessly update the page title again and again. So when we want to do sth only the first time a comp
renders, we can use useEffect().
Technically, we could have access useEffect() by just typing React.useEffect() , but by importing useEffect like:
import React, {useEffect} from 'react';
now we can access it directly from JUST useEffect() .
Important: The first arg of useEffect() is a function you want to run at a specific time. The second arg, is a list of dependencies that you're watching
 to see WHEN they CHANGE and when one of those things changes, only then will your function actually be called the run.
 When you specify an empty array for second arg, it means we're not watching for anything to change and this is how you tell react, only run this
 the first time the component is rendered.
In body of first arg of useEffect() , we're manually update the title of the page. Also in that function, we're telling the browser to scroll up
to top of the screen, when you switch to that page(comp). Those 2 lines are web browser or DOM based code.

After that, you need to manually refresh the page(to see the title property from our index.html file)

We don't want to duplicate code in every component and we want to place it in one centralized place. Maybe we can use inheritance, so we can
create some sort of page blue print or page class that the About comp or home page or ... can inherit from .The creators of react recommend instead of
inheritance we use composition. So let's solve the problem of not wanting that duplicate code in all of our three comps.

For that within components folder, create a new file called Page.js
Now in turns of what that Page comp should return as jsx, let's have it return the overall Container and then whatever content was in the component
that's gonna call the Page component.
So go to About comp and swap <Container></Container> with <Page>.

We used props.children in Page.js , because when for example About.js uses <Page> , we have that nested content in between tags of <Page> and
then Page() comp is gonna display that content with props.children . Also because Page.js is taking care of document title and scrolling,
we no longer need that useEffect() in About.js .
This way we don't need to duplicate any of that code within multiple comps.

So when About.js(more specific component) uses Page comp, the Page(more generic component) is gonna take care of document and scrolling and
displaying the unique content inside the container.

Composition means: Components using OTHER components using OTHER components ... and passing props around as necessary. Generally speaking,
with composition, you're gonna have a more specific component, using a more generic component. This lets us put the code that is more generic
in one centerlaized place to avoid duplication. */
/* SECTION4. 4. Working With a Real Back-End:
21-1. Getting a Database Ready:
After creating the DB, we need to configure things so that a backend server can actually connect and communicate with that DB. So from left side
navigation of mongodb atlas, go to clusters then click on connect button.
Our first step is to let it know which ip addresses we want to be able to connect to the db. We actually do NOT to just add our personal ip
address because later on in the course when we push our app onto the web, we have no way of predicting what ip address that public server
will have. So click on add a different ip address and in the field of ip, type: 0.0.0.0/0 . This is our way of saying: let ANY IP address
connect to the database as long as it knows the secure username and password for the db. That was step 1.
Step 2 is to create a mongodb user. Now I know you JUST chose a username and password for your overall mongodb account, but this is a user
tht we can use, to connect to individual databases. So you do need to create that one more user then use option: connect your application.

When we setup the backend server, that connection string is what will allow it to actually connect to our db. Then create a file in your
project and replace <password> for the USER of that db. Then instead of test in: mongodb.net/test , write your DB name. Or in newer
version of mongodb, it should be "myFirstDatabase" instead of "test".

So with your password and db name in place, that connection string will now successfully let you connect to db from our backend server.

Next we'll setup the backend server on our machine.

22-2. NOTHING.

23-3. Running The Back-End:
Be sure you don't place backend-api INSIDE our react project and it's good to place it side by side.
Then create .env file in root of that folder.

Now run npm i inside backend-api folder. npm i will look at our grocery list(package.json) and will grab every package that we need.
The run: npm run start and visit localhost:8080 , you'll no that you setup your backend correctly, if you see that hello message when visiting
localhost:8080*/
/* SECTION5. 5. Connecting the Front-End and Back-End:
24-1. Quick Note About Debugging: Nothing

25-2. Sending a Request From the Front-End:
We want both react project and backend api tasks up and running. So run: npm run dev and that allows you to visit localhost:3000 .
Then go to backend api and run: npm start or npm run start and that's gonna allow us to visit localhost:8080

In handleSubmit() the first thing we wanna do is prevent the browser's default behavior, because by default, when a web browser sees you
submitting a form, it's gonna try to send that off to a brand new url and load an entirely new html document. We don't wanna do that.
We want to handle everything seamlessly or asynchronously with JS. The e arg of handleSubmit, contains info about the event that just took place.

Modern web browsers indeed have a native tool fr sending off asynchronous requests which is fetch(). For installing first stop the
running webpack task, install, then re-run it.

Right after catch in catch blocks, in order to please microsoft's edge browser, we do want to include () and give it a parameter of e.

The catch block code will be executed, IF there was an error right? Our server does require the username and email to be unique for each
user and if it wasn't the catch block in frontend will be executed, also you'll see it if your username was less than 3 characters or
email address didn't look like a standard email format or if your password was less than 12 character.

26-3. Access Form Field Values with React:
Anytime the value of those 3 fields of form changes, we're gonna store it's newest value in state. This way, when the user actually
submits the form, we'll already have those current values (newest of them) in state and we'll send them along with our request.

Notice that we didn't use () for the function we passed to onChange.

useState() returns an array with 2 items in it. In handleSubmit(), for example, username will allow us to access to current value and
setUsername is a function that we can call to update it's value(username in that case).

Then we need to add onChange event listeners to each of those 3 fields. For value of their onChange attr, we have 2 options.
We can either create a function up above and then just reference it's name into that {} of onChange. Or we can just create an anonymous
function.

Important: By saying: <input onChange={e => setUsername(e.target.value)} /> everytime that form field changes, that
 function(setUsername()) is gonna run which is gonna update our value that's being stored in state. So with that, we're always gonna have
 the most current values in state.

Because of UX, now we need to add CLIENT side(JS based) validation(the actual validation is happening at backend). So that by the time
the user submits the form, they've ALREADY seen any pf potential problems that they might run into.

27-4. Logging In(and logging out):
Because that form is the only part of the header that's gonna change, depending on whether we're logged in or logged out, once you login,
you should see other stuff than that form, so in order to stay organized, we can put that form that lets you login, in a separate component
file and name it HeaderLoggedOut. Then you can type rc and hit tab to create boilerplate for that new file and then you can get rid of
react fragment tabs and place that <form> content. Why we got rid of that fragment?
Because we only have 1 OVERALL element to paste in their place, so we don't need them anymore(if we had multiple overall elements, we needed
that react fragment).

In HeaderLoggedOut, let's begin coding by keeping track of the latest username and password values in state.
Then add onChange event handlers for those two fields of form.

In handleSubmit() of HeaderLoggedOut() , instead of default behavior of submitting a form, which we preventing it, we would want to
use axios to send off a request to backend.

We included e param for catch() block in HeaderLoggedOut, even though we didn't use it. Because yeah! In many cases you would want to
reference that error you ran into by using that parameter, in our case, we're only including that param, so the microsoft edge browser doesn't
throw a fit.

If you're like me and you're sick of having to type that beginning NON UNIQUE portion of the url(http://localhost:8080) over and over,
we'll look at a more elegant way to handle that(because we're not always on local host right?).

response.data is body or actual response from the server.

There's a million different ways that a backend server could be configured for error, but our backend server is written to return false if
it's not a correct username and password for login.*/
/* 28-5. Render Different Components Depending on State:
You can edit that react snippet we made, to not have those react fragment tabs, because in most cases you won't need them.

Because currently, within the HeaderLoggedOut file that sends of the request to server, we would have no way of accessing that
piece of state which we currently declared in Header.js file. To get around that, we can pass it as a prop to HeaderLoggedOut.
So give HeaderLoggedOut, a prop of setLoggedIn. So because we gave HeaderLoggedOut a prop, we need to include props arg for that
HeaderLoggedOut function.

You can add the props param by default in our react snippet.

Because we haven't setup any sort of PERSISTENT data or local storage, we do need to sign in again, for testing logging out functionality.

Currently anytime the browser refreshes, it forgets our state. So we need to use browser's local storage feature and look at interact with
local storage from a react perspective.

29-6. Persisting State (Local Storage):
Whether complexappToken exists in localstorage, we're gonna adjust that header, you could base the conditional logic on any of those properties
in localStorage.

I realize it might be a bit confusing or seem messy or unorganized that we're setting localStorage in one file(HeaderLoggedOut) and then
we're accessing localStorage in ANOTHER file(Header) and we're removing localStorage in yet another file(HeaderLoggedIn). Later, we'll look
at a more elegant way of handling this.

30-7. Conditional Homepage Content:
Currently, we want our app to smart enough to show the HomeGuest if you're logged out, but show Home if you're logged in. So in
Main we need a conditional logic, so a ternary operator and in there say: if the piece of state that says if you're logged in or
not is true, then show Home otherwise show HomeGuest. However, this is where we run into one of the most challenging aspects of learning
react and that is managing and accessing our state throughout different parts of our app, because we need to remember that the piece of state
that says whether you're logged in or not, CURRENTLY, lives within our Header comp. So it's within our Header comp, where we create a
piece of state named loggedIn and our Main comp(parent comp of Header) has NO WAY OF ACCESSING STATE that was created within our Header comp(child).
The solution is to move the state UP. In docs they refer to this, as lifting the state up, meaning move the state up your component tree into
your top level component and then, any subcomponents or children comps, you can just pass it down as a prop as necessary.
So now, cut that const [loggedIn, ...] = ... from Header and paste it in Main . Then we need to pass both of those loggedIn and setLoggedIn
as props to Header(because Header depends on them). Then we need to receive(by adding a param of props to the function of comp) and
use them in Header file. Then add a ternary operator for Home or HomeGuest(for path="/") in Main file.

While the strategy of passing state down manually from component(parent) to component(child) to component ... , this way of doing things
might ne the traditional or standard or idiomatic way of doing things. It's not the best way of doing things. Historically to get around this
annoyance of having to pass down state manually as props(potentially many layers deep), to avoid that, in the past, many devs used a third party
state management(redux).
However, in the latest versions of react, we now have context and useReducer and in many apps you don't need redux anymore. */
/* 31-8. Create Post Screen:
When we're creating a SPA which means we don't actually want the browser to navigate to an entirely new html document, instead we want our
react router to handle the navigation on the client side. So instead of <a href=""> we use <Link to=""> .

It would be nice if that tile field was automatically focused when you navigate or reload the '/create-post' page. As you can
see that related <input> for title has already autofocus attr. However in JSX it needs to be autoFocus with uppercase F. and the for
attr for <label>s need to be htmlFor.

Let's resolve the issue of having to type in that NO UNIQUE based portion of url every time we want to make a request to backend.
Because the only unique part of the url is for example: /create-post endpoint. For doing that, in Main file, we can set the default or
base url for all axios requests by using Axios.defaults.baseURL .
With that, we just set that once within our Main file and now that will be used as the beginning portion for all reqs. So remove http:// ...
from other comps.

The token is how the server knows that it can trust our request. The token is how the server knows that we actually ARE who we say we are!
Because remember the server is what gave us that unique or cryptographically secure token in the FIRST PLACE. So in handleSubmit() of CreatePost,
we need to send the token.

For pulling the whatever values the user typed into the fields, we need to use useState() for each of those fields to track the fields values.
Like what we did in CreatePost. Then we need to add onChange event listeners for those fields(remember: we added onSubmit for overall <form>.)

By using onChange={e => setTitle(e.target.value)} we're always gonna have the most recent value in state of that title and we can then send
title(states) in body of post request.

Also remember, if you leave either of those create post fields blank and then submit the form, our server is NOT gonna accept your request.
Now YES, if we check the console, it won't gonna execute the catch block codes because of the server not accepting the request. Because
if you check the console, it will LOOK as if it did accept that. However, if you actually look in the DB, there would be no new document.
Our server only actually accepts the request, if neither of those 2 fields are blank.

32-9. View Single Post Screen:
We want to set things up, so once you create a new post, we would want to redirect to the new url for that newly created post. So first
let's create that post component.

React router is managing the browser's history for us and (for redirecting programmatically) we want to push a new url onto the end of
that history and then react-router package will handle everything else for us. Now in order to work with react-router's history from within
a comp, we need to use a tool from react-router named withRouter. When you want to use withRouter, you need to remove the name of exported
function of component and instead write: withRouter(<name of function of comp>)
EX) export default withRouter(CreatePost)
Essentially, when we use withRouter() like that, it's gonna result in a component(in this case, CreatePost comp) that uses that component
which we used in () of withRouter for the main meat and potatoes but react-router is gonna pass it(the comp that we passed to () of withRouter()),
all sorts of useful things regarding the router and the history. So it pass that into the component through props. So now we need to receive
those useful stuff by including props param in CreatePost() function and now inside props, we can access different things that the
react-router package has given us(how it gives us those stuff? By using withRouter() and pass that comp function to () of withRouter() ,
when we export that comp).
Now by doing that, if you say: props.history.push('/...'); by doing that, react will navigate us to that url.

In future lesson, we can use id segment of url of a single post, to fetch the relevant data for tht desired post.

33-10. Flash Messages:
We want to add flash messaging to our app. Where should the html for that flash message live? Because we wouldn't want that html to
live in that CreatePost comp. Because as soon as you submit that form, we're navigating away from that CreatePost comp. Also we wouldn't
want the flash message html to live within ViewSinglePost comp. Because what if you created a new post and then immediately clicked away to
another page. The idea is EVEN if you switch to another page immediately, we would still want that success(flash) message to stay there
for some seconds. So this brings us to conclusion that the html or jsx for our flash messages should actually live in our Main comp.
So right above Header comp, we can render flash message comp.

Remember: The logic of having that flash message disappear after 5 seconds, that's being handled completely by css animation code.
It's not as if react is actually removing that element after a certain amount of time! We'll look at how to set sth like that later., but for
this specific feature right now, I think an entirely css based approach will work just fine.

At this point we want to be able to add one of those inner <div>s that actually CREATES a message(the inner <div>), into that overall
<div>(<div className="floating-alerts">), but we want to be able to do it from another or from a different comp. Because we want to
show a flash message after you've successfully submitted a post.
For that we need to create another piece of state named flashMessages in Main comp.
Now in terms of using that state, technically, we COULD just pass setFlashMessages into the CreatePost comp(because CreatePost comp will
eventually CHANGE that state). However, since we're working with multiple messages(a collection or an array of messages), it's not as simple
as just changing to a new value. Instead, we want to take the older previous state value and concatenate on, one more value to the end.
So let's create a function and name it addFlashMessage() .

Important: When you wanna work with the previous state value, you need to give set<state>() function, an anonymous function with a param named
 for example, prev. So then you can work with that prev state value in that given function.

concat() method doesn't modify or change the array that you call it from. Instead, it just returns a new array.
The whole point of that new function, is now we can pass it into CreatePost comp and it's as simple as just calling the function and
giving it a new message. So we won't worry about pushing it onto the old collection of array(states).
Now before pass that function to CreatePost comp, let's first make the flash messages comp actually flexible or dynamic and give that comp
the messages prop and as value we give it that piece of state that stores all of the messages and then in FlashMessages, include props to
be able to receive the props that we have passed to that comp.

In react, whenever you're looping through a collection and outputting a comp(or some html) for each item in that collection, you want to
be sure to give the overall element(which that overall element is parent of all returning html) a key attr and for value of that
key attr, you can pass it a unique thing of that current item.

Now pass CreatePost comp, a prop named addFlashMessage.
So actually, we're giving the update function of flashMessages, somehow(because we aren't passing it directly to that comp, instead pass another
function that uses that update state function) to CreatePost comp, because that's the actual comp that is responsible for changing the
state of current flashMessages and give the actual state value to FlashMessages comp. Then in CreatePost go to where you're performing the
redirect after a successful post is created and above that, use that addFlashMessage to update the state of flashMessages.

The approach we took in this lessons works, but now we need to realize that we're going to want to be able to add a flash message from just
about ANY COMPONENT or every comp in our app. Not just the CreatePost comp. So in Main file, yes, we were able to manually pass that
addFlashMessages function into that CreatePost comp and that did let us modify the state that LIVES in Main comp, from
within a DIFFERENT(that's why we needed to pass that update function to that other comp) comp(CreatePost).
But the question is would we really want to have to manually add a prop like that to EVERY SINGLE comp where in those comps we would want to
leverage that function?
It feels repetitive and there's a better way in order to approach state.

To be more specific, right now the question is: if we have a piece of state in our overall or TOP (parent) level comp, what is a more elegant way of
letting any sub or CHILDREN components work with that state?
We need to use context.*/
/* SECTION 6. Leveling Up The Way We Approach State:
34-1. Context:
Learning about context, will let us pass data DOWN throughout our comps in a more elegant way. So in Main file we created that addFlashMessage
function and we manually passed it down to our CreatePost comp. HOWEVER, we realized that we're gonna want to be able to use that
addFlashMessage function from within many many of our comps and having to pass it down manually as a prop like
that(in Main file: <CreatePost addFlashMessage=... />) is quickly gonna become annoying and cumbersome and that's just one layer deep!
What's worse is if we think back to our loggedIn state and setLoggedIn function, remember, in Header comp in Main file, we manually passed
those state and setState function into that overall Header comp, but then even in our Header file, we have that conditional code where it
either shows HeaderLoggedIn or HeaderLoggedOut and in both of those cases we're manually AGAIN! passing setLoggedIn as props to both of those
comps. That's annoying and that was only us having to pass it 2 layers deep.

So wouldn't it be nice if in Main file we could just wrap our entire bit of jsx within one overall parent or container comp and give it a value
and then wouldn't it be nice if ANY and EVERY component nested inside it, could directly consume that value, no matter how many layers deep
they're nested. That's what context in react lets us achieve.

Let's create a new file, not it's not a huge deal but I don't want us to create the new file in components folder and let's create it in our app
folder and name it ExampleContext. In there, we do not just want to type rc and then hit tab, because that's not a traditional react comp,
instead, in this case we only need to import createContext from react library. So import {createContext} ... after exporting that context, go
to Main file and we know that right now, our overall or top level component is <BrowserRouter>, so now even above that line write:
<ExampleContext.Provider> and then add it's closing tag in the END of jsx to wrap that entire jsx with context. Then on opening tag of
context provider, we give it a prop and it needs to be named: value and for it's value, whatever we include in those {}, ANY CHILD COMPONENT,
no matter how many layers deep it is nested, will be able to access that value. So in our case use addFlashMessage function for value of value
prop of Provider.
Now how would we access or CONSUME that value from within our CreatePost component(child comps)?
First get rid of that prop of addFlashMessage={addFlashMessage} for CreatePost in Main file. Because we're currently using context, so you
don't have to manually pass down data as props like that.

Now go to that child comp to consume(or use) that context value. Then in CreatePost, comment out the line that is using addFlashMessage as
a prop and write: const addFlashMessage = useContext(...);
Now in () of useContext() , we need to tell it which context we want to use?
Now this is why we created our context in a separate file, so that we can import that file(context file) from within ANY FILE we want.

Now after giving the context function to useContext of that child comp, we know that within our Main file and on our Provider that wraps
everything, we gave it a value. So that value gets added to the context provider and remember, that context is coming from that separate
file. So then in child comps(like CreatePost) we're working with that same piece of context, so it has access to that value that we added to
it and remember we gave it a value of addFlashMessage function but the idea is we could have given it a value of ANYTHING.

So now we can access that value of context, directly from ANY component nested inside that Provider.
The way useContext() works is, it's gonna look up the component tree and it's gonna find the nearest or closes ancestor that uses that
context provider(in our case ExampleContext) and the beauty is, it doesn't matter how many component layers nested deep you are.

Also in Header in Main file, we're having to pass setLoggedIn not once but twice or 2 layers deep, because in Header, we're also passing
setLoggedIn to HeaderLoggedIn and HeaderLoggedOut AGAIN, for the second time.

Now the question is, in Main, on that context Provider, is it possible that we could have the value be more than one thing? In other words,
could we not only make addFlashMessage available, but could we make setLoggedIn ALSO available to any children comps?(So can we make multiple
values available to all of the child comps and child of those child comps and ...?)
YES!
So on the context provider and in value of value prop, let's empty out it's {} and inside those {}, add ANOTHER {}. So essentially we're setting
the value to be an object and then we can give it MULTIPLE properties and now we can get rid of that props for Header in Main. So we no longer
need to manually pass in setLoggedIn like that. Technically we COULD move loggedIn to our context as well, but let's keep this example simple.

Now before we adjust our Header, we do need to go into CreatePost and when we're creating addFlashMessage variable, well, that useContext() is
no longer gonna return just a single value which is the function that we want. Instead, we would want to de-structure the object that it's
returning. Because it's returning an object with multiple properties now. So for destructuring an object, we would wanna wrap the variables
in {}. We don't need to use context in Header and we just need to get rid of that manually passed down setLoggedIn prop on both
HeaderLoggedIn and HeaderLoggedOut. And instead of using context in Header, we can go in deeper layers like HeaderLoggedIn and HeaderLoggedOut
and in THOSE PLACES, we can use useContext() .

So we had a good refactor.
So anything that lives within that Provider, (no matter how many layers deep)can consume and use the value(the object) we passed to value prop.

35-2. useReducer:
useReducer is another way of working with state in react. So we could say that useReducer is an alternative to useState, so useReducer is like
a sibling or cousin of useState. Now if the two are similar, the question is why or when should we use useReducer instead of useState?
Both useState() and useReducer() return an array with 2 things. The first thing they return is a piece of state and the second thing
that it returns is sth that you can use to call an update state. However the huge difference is that when you use useState(), the function that
it gives us is quite simple. You call that function and then whatever value you pass into it, that will be the new state.
But with useReducer() , the second thing it gives us is th called a dispatch.
In () of useReducer() , we give it 2 things. The first is a function. So we can create a new function named ourReducer() and pass that
function as first arg of useReducer() . The second arg is the initial value for your state(whatever your initial state to have as a value).
So we can create a variable like: const initialState = {}; and then pass that variable as second arg.

Now we can imagine our state contains ALL SORTS OF DIFFERENT data, for example whether we're logged in or not, any flash messages that should
be shown. Imagine that all sorts of DIFFERENT data about our app lives within that one overall object(initialState variable).
With dispatch, we can perform all sorts of different actions. So the idea with dispatch is that you're just saying what you WANT to do but
you're not having to spell out HOW it actually gets done. That's where our reducer function comes into play(ourReducer()).
That's(the reducer function) where you would actually say how those dispatch() things happen or how the state data of our app
should change for those particular actions which those actions are performed with dispatch().

Important: For that, let's give reducer function 2 params, state and action. The idea here is that anytime you call dispatch(), whatever you
 include in () when you call dispatch() , that's what's going to get passed along into our reducer function as the action.
So essentially when we say: dispatch({type: 'login'}); , we're dispatching a command to make a login action. Only you'll notice that
when we're calling dispatch(), we're not having to babysit state or really think about HOW those things happen. Instead, All of that
complexity and all of that different logic should live within your reducer function.

So now within the body of our reducer function, there's many different ways you could handle it, but the standard or idiomatic way of handling it,
is to use a switch() and the switch is based on(the thing we pass to () of switch()) action.type.

In switch() you just outline the different cases, depending on what the value of the thing in () of switch(), is.
So now we just say what should HAPPEN, if the action.type is 'login' or ... . But the idea is tht all of that is condensed into that
one central location(inside that switch()).

Now in our case(in our app), we wouldn't actually call dispatch() within our Main file. Instead, the idea is we have that one super convenient
thing called dispatch, that we can now pass DOWN to ALL OF OUR CHILDREN COMPONENTS. I mean you absolutely COULD use dispatch() directly within
Main file, but if we think of our context provider example, imagine how powerful this is. Because:
Important: We can just set the value of context provider to be dispatch function and then within ANY component in our app, no matter how
  many layers nested deep it is, you could JUST CALL dispatch() and you wouldn't have to think about HOW actions actually get done and
  therefore, you wouldn't have to babysit state and you just say WHAT ACTION you WANT TO dispatch or what action you want to make happen and
  then our reducer function will take care of everything else.
  (Remember: We setup useReducer() and it's params(the reducer function and initial state) in Main file and then we add dispatch to
  context provider and in any child comp, no matter how many layers deep, we just call dispatch(<the action>) and then in our reducer function,
  we can receive that action and execute some code for that action)
  Now in reducer function, no matter what the case or what the type of action is, we ULTIMATELY want that function to return the NEW STATE VALUE.
  So it's up to us. However, we think we need to change the state to now reflect the fact that the user logged in, well, that's the overall
  state object that we would return there for case 'login'.
and before we actually worry about what we return for those cases of switch(), let's focus on our initialState and add 2 props to that object.
The idea is instead of using useState() and having SEPARATE pieces of state for loggedIn and flashMessages(which are both SEPARATE variables that
hold the state), let's combine them and use useReducer() . So previously we set our initial value for loggedIn to: look to see if a
localStorage item named complexappToken existed or not(a boolean)? So we would use that same value that we gave to useState() as initial state.

Now with our initialState variable in place, I think our job of what we need to do in ourReducer() function should now be clear. So within
that function, the first param which is state, represents the PREVIOUS or the current state value. So depending on what the different
action is(in our case, action can be login, logout, or ...), it's our job to use the previous or current state and make some sort of
CHANGE to it and that's what we return in those case statements for each action.
Important: In react you don't want to directly modify or mutate state. So instead, we want to create a new object based on the previous values.
In each action inside reducer function, we want to return an object and essentially we just want to create an object that mimics our INITIAL
STATE but we make any necessary CHANGES. So in case of login action, we want to return an object which has property of loggedIn CHANGED to true and
because we want to MIMIC our INITIAL STATE, we also want to add that exact property name of our initial state which is flashMessages to our
returning state object, but now this time, we don't want to change it(we're not adding a flash message), so we just pull it's value
from the previous state and we know that the previous(current) state is in the first arg of reducer function which is state arg().

The object(state object) we return from actions of reducers, must mimic our initial state object, so it's property names must be the exact
names, in other words, we return that exact initial state object but with some changes to it's values of properties.

Now I realize we could do that creating or mimicing the initialState object when we're returning the new state object in actions by using
spread operator or destructuring or some sort of es6 trick, but in future we'll use immer to sidestep this whole issue or having to AVOID
directly mutating state. But for now, that object we're returning will do the trick(currently we're actually CREATING a new object by hand).

For flashMessage action and for flashMessages prop of returning object, we would want to take the previous value and then concat in the
new message to that old array and for value for () of concat(), we know that when we call dispatch() in nested comps, in addition to type prop
which we pass to () of dispatch() , we can give it any other properties we want, which that type prop and other props we gave to dispatch(),
will be available in second arg of reducer function. So:
Important: The object you pass to dispatch(), will be available as second arg of reducer function. So when we call dispatch() like:
 EX) dispatch({type: '', value : '', ...}) that object will be available as second arg of reducer function which in our case, we named
 that second arg, action. So here, we would have action.type and action.value and ... within that reducer function.
So you can imagine we give dispatch() also a prop of value and we used it in flashMessage action.

Now for time being, that completes our reducer function.

EX)
const initialState = {
    loggedIn: false,
    flashMessages: []
};

const ourReducer = (state, action) => {
    switch(action.type) {
        case 'login':
          return {...};

        case 'logout':
            return;

        case 'flashMessage':
            return;
    }
};

const [state, dispatch] = useReducer(ourReducer, initialState);

dispatch({type: 'login'});
another ex:
dispatch({type: 'flashMessage', value: 'you created a post'});

What is useReducer() really doing?
When we call it, we give it function and our initialState and in return, it gives us 2 things. We chose to name those 2 things, state and
dispatch. The reason this is cool, is now we have JUST 2 things that can power our ENTIRE APPLICATION! What do I mean by that?
In previous lesson, we learned about context and we were already having to pass tons of different values in as the value prop of that Provider.
So currently we're passing addFlashMessage and setLoggedIn as values of context and as our app grew*, we would have to just keep passing MORE AND
MORE things in value prop of context provider. However, if we use useReducer() , now the only THINGS we would EVER need to pass in to context
provider, is our overall state object and our dispatch. JUST THOSE 2 THINGS, can allow a potentially infinite number of different actions and
different changes to state.

Currently, we haven't actually seen it in action yet! However at thins point, now that we've actually CONFIGURED our REDUCER, we're gonna
work on adding them to our context provider and then making USE of state and dispatch, WITHIN our different(nested) cops.*/
/* 36-3. A Powerful Duo useReducer & Context:
We're gonna learning about a powerful duo!
Important: Now that we've setup our reducer, we're ready to actually start using it by dispatching actions and if we combine this with the
 power of context, it will be easy to dispatch actions from within ANY component in our app!

So our goal is to remove the old way that we were working with state for loggedIn and flashMessages that were(both) created using useState().
So let's comment those 2 lines of useState() for loggedIn and flashMessages in Main and also comment the addFlashMessage() function.
So the idea is we're gonna recreate all of that functionality using our reducer. Actually, we've ALREADY spelled out different actions and
how our state should change(when those actions are dispatched).
So now in this lesson, we just want to pass state and dispatch which are returning results of useReducer() , into our context provider, so we
can access that data within our comps. So on <ExampleContext.Provider> let's change the value to state and dispatch. So we write:
<ExampleContext.Provider value={{state, dispatch}}> instead of <ExampleContext.Provider value={{addFlashMessage, setLoggedIn}}>.

HOWEVER, I do need to stop here and make things a bit more complicated. So that setup(with passing state and dispatch in context) would work
but it's not optimal from a performance standpoint, because we need to acknowledge tht anytime, anything in that object that we've spelled out
in context provider(which in this case that object is {state, dispatch}) CHANGES at all, ANY COMPS that are CONSUMING that context will re-render
to make sure that they have that latest value({state, dispatch} value). So some of our comps will not need access to our global state(global
state is the state variable that we're passing in value attr of context). Instead, some comps will ONLY need access to our dispatch and so
we wouldn't want those comps, unnecessarily re-rendering everytime global state changes.

So the way that react team recommends we set this up is to simply have 2 context providers in our jsx. One context provider for state and
one context provider for dispatch. That way it can be up to each component to decide which context they WANT to consume and watch for changes.
So let's delete that opening ExampleContext provider which currently is our first line in jsx of Main and instead, let's have:
<StateContext.Provider value={state} />
    <DispatchContext.Provider value={dispatch} />

So RIGHT BELOW(nested inside) <StateContext />, we use our <dispatchContext />

You can delete ExampleContext because we don't need it anymore.

At this point, we made state and dispatch available from within ANY comp in our app. Now we need to go into those comps and make them leverage
that state and dispatch.

Currently, we now longer has a variable named flashMessages, we have a PROPERTY named flashMessages which lives in our overall state object.
Now let's remove the manually passing of states like loggedIn in our Main.

Also you can make FlashMessages comp to use context not messages props. But we leave it as it is.
Now create a variable named appState and assign it useContext() to actually use our context provider in Header.

We used appState and appDispatch for variable names for result of useContext() in comps that use StateContext or DispatchContext, so that way,
the name of dispatch can be available later on, for hta particular local component. Essentially, we're using a prefix of app to sort of mean
global or app wide.

Important: The type prop in object that we pass to our dispatch()s, is TYPE of ACTION we want to dispatch.

Because in Main file we're on the same file that creates context, we don't need to use useContext() and we can for example use:
state.loggedIn inside <Route path="/"> .

Now you need to perform a manual refresh, because some of our changes when we were halfway through our work, definitely created errors.

So being able to define all of your complex logic in one place and then not having to babysit state elsewhere, just being able to dispatch
actions carefree and not really caring HOW it gets done, can be a lifesaver.

So far we've learned about context, useReducer and the final piece of puzzle is immer. Because we never want to directly mutate or change
our state. Instead, you give react new value or new object and it handles updating your app's state. */
/* 37-4. What is Immer:
In ourReducer function, for each different type of action that gets dispatched, we would want to update the state of our app in a different
way. For example in 'login' action type, all we would REALLY want to CHANGE, is to make sure that the loggedIn property now has a value of
true. However, EVEN THOUGH we're NOT CHANGING flashMessages, we STILL HAVE TO SPELL IT OUT(mimic the initialState), because in react you need
to return a new object. You can't directly modify or mutate the existing state object. Now in this example, we ONLY have 2 properties, but
imagine if you had 20 or 30 properties. If you ONLY want to update ONE of the properties, you really wouldn't want to have to spell out all other
properties again. So we really want to JUST change the things that we ACTUALLY want to change, not all of the properties again.

Immer will give us a draft, essentially a carbon copy of state(the first arg of reducer() functions) and then we're free to directly modify
and mutate that draft. So install immer and use-immer packages, the second oen is specifically related to using immer within the context of
react.

We don't want to import the WHOLE package, so we use {} in import statements and in {} you specify the things you're interested to import.

You can also use immer as a replacement to react's useState() and react's useReducer() , but in Main we're using immer as a replacement to
react's useReducer() . So in place where we're using react's native userReducer() , instead use useImmerReducer() . Then go to
reducer function and change the name of first arg of that function from state to draft. Because what immer does is it gives us a copy of
state. Or in other words, a perfectly cloned copy that we're free to modify and change and then immer will automatically handle the
task of giving that draft object, back to react. So I commented out the old way of cloning stuff, because we don't need to clone them manually
anymore and in flashMessages action, instead of concat() we used push() . Because this time, we actually DO want to directly modify
or mutate that flashMessages array.
So essentially immer gives us a draft and then we can directly modify it however we see fit. This saves us from having to spell out the
entire object everytime.

While we no longer need to return a value for the sake of react, we do still need to pay attention to the way that a switch case syntax works
in JS. So at the end of each case statement you still would either want to just return nothing(undefined) or use break keyword.

At this point, we now have an ideal way of working with data in react. We have 3 big things.
1) context: which makes it easy to share data throughout the entire app(from parent to nested comps)
2) A reducer: which lets us keep all of our logic in one centrally located place.
3) immer: makes it easy to work with complex objects in an immutable fashion.

I mentioned that it's messy or unorganized that we're setting(an item in) localStorage in oen file and then accessing it from another file and
then deleting it from yet another file. So we're gonna fix that and make sure that any sort of localStorage work, happens within our Main file.

38-5. useEffect Practice:(moving side effects into useEffect())
The problem we want to solve is: we're saving and loading that data to localStorage from way too many different files in our code.
working with the SAME piece of data in many different locations like this, is the number 1 cause of bugs and unexpected problems in your app as
it grows. Our goal is to restructure things so that all of our loading and saving from localStorage, takes place ONLY within Main file.

Let's add another property to initialState of Main file, named user and set it to be an object with 3 properties. So the idea is we now have
that user object that will be available in our global or app-wide state. So now any other (nested) component that needs to access that data about
user, will no longer need to talk to the browser's localStorage, instead, it can find those values in state.
But the question is: How should those values of user object, get set into localStorage IN THE FIRST PLACE which is when you perform a
successful login?
Well, we would ALSO perform that within our Main file. So now, go to HeaderLoggedOut and the idea there is we don't want to be working with
localStorage from within all sorts of different files throughout our app. So what I would do in child comp(in this case it's HeaderLoggedOut),
is send the server's response(the data) back to our reducer function, through our dispatch.
So comment out those 3 lines where we're dealing with localStorage in HeaderLoggedOut and then on the line tht we're sending a dispatch with
type of 'login', I would just give it ANOTHER property and you could make up any property name you want, but I named it data and we give it
the object that the server sends back to us. Then go back to Main and then work with that new property named data. Go to reducer function and
in it's 'login' action set the draft.user = action.data

So now throughout our ap, whenever we need to access the token, username or avatar, we can just pull that from state, instead of from
localStorage. However, before we make those adjustments throughout our comps, first we need to SAVE those values that server sent to us, into
localStorage in the first place when you login. Because remember we just commented out that code within HeaderLoggedOut which was the code
that was saving the values into localStorage, so we need to do that in Main.
Now technically, yes, we COULD just include code(saving to localStorage), right in the body of that 'login' case and that code saves it into
localStorage, but philosophically we want to keep our reducer PURE, in terms of it ONLY WORKING WITH REACTISH THINGS or only working with
state. In other words, if we need to do sth that's considered a side effect like directly changing the browser's DOM in rare situations, or
in this case, working with browser's localStorage, we should probably do those types of things within a useEffect.

So right below const [state, dispatch] = ... ; let's use useEffect(). The second arg of useEffect() is an array of dependencies tht you want to
watch for changes and in this case we're watching state.loggedIn, so now anytime that state.loggedIn changes, that first arg which is a
function will run.

Now we need to make our app to pull data from state's user prop and not directly from localStorage.

You have 2 way of using hooks:
1-Easy access: This is done by importing React and then those hooks in {} so like: import React, {useContext} from 'react';
 Now you can JUST write the hook without React. .
2-normal: We just import React and then where ever you want to use a hook, you need to write: React.<name of hook> */

/* SECTION 7. Actually Building Our App:
39-1. Profile Screen:
If you have a simple string, you can use "", but if you want to use backticks and template literal, you need to first include {} and then
inside it, you can use backticks.

useParams() will return an object that can potentially have many different properties.
Important: React is going to execute the function of a component, anytime ANY of it's state changes or anytime any of IT'S PROPS FROM A
 PARENT COMPONENT changes.
And for case of Profile comp, we really don't want to be sending off new network requests with axios, everytime that happens.
So we can't just write: axios.post() in Profile comp. Because that would send a request, everytime that comp changes, so this is where
useEffect is the perfect tool for the job and as of right now, we don't need to watch for anything changing, so an empty array is our way
of saying: "hey react, we only want you to run this function(which is the function of component), the very first time this comp is rendered."

As of today in react, you can't use async function as first param of useEffect() . To get around that we need to STILL pass a normal NON async
(anonymous)function as first param of useEffect() and then inside that anonymous function, we create an async function and then RIGHT AFTER
we define that function, we can IMMEDIATELY call it, by using it's name and () .
EX)
useEffect(() => {
         const fetchData = async () => {
            try {

            } catch (e) {}
         };
         fetchData();
}, []);

We need to send our token in /profile/:username so with that, the server can figure out if we (the current user) are following this user or not?
In this case, we or the current user means, the actual viewer of this page(/profile/:username) which the data of this current viewer can be
found in token and this user means, the profile that we're viewing currently, which it's username is in the url segment. So we're
sending both viewer of page and the token of viewer currently viewing, to the server. So with that, the server can find out if viewer
of page is following this profile or not.
So we want to know that the viewer of page is following that profile or not? So we need to send username of profile of page which
we passed it to server in url and also we're sending the token of current viewer in body of request. In response, server tells us that
if the current user that's logged in with that passed token is following this profile user or not? and other stuff.

Now in order to access token in Profile, we want to use our StateContext.

In () of useState() we can provide an initial value and in initial value of useState() , we would just mimic the object that the server is
going to send back, however, only I would give it the values that would make sense to display there(in profile page). So because
we don't know the username of profile that a viewer is viewing(until the request come back from backend), we need to make up a name
for that profile page and the best value for it is just: ''. Also the avatar image for the profile page while the data of that profile
isn't come back yet, is an anonymous looking person picture, right? and so it goes other data of profile to show, while the response isn't back yet.
For that, we HAVE TO USE STATE and give the useState, these initial values that I mentioned and when the server came back from server,
we can update that state to tell react to re-render that comp. So I've passed some initial states like:
        { profileUsername: '',
          profileAvatar: 'https://...',
        }

This is one approach, another approach is to use a loading spinner.
So the idea is, now that INITIAL state will now be IMMEDIATELY available, as soon as that Profile comp tries to render and then however long
our request takes, whether it's 20 milliseconds or 2000 milliseconds, we can just update that piece of state by using setProfileData()
and react will automatically re-render things with those values for us.

So now currently, those placeholder values(initial values which immediately is show to user before the response come back) are being used.
So now all we need to do is: once our request finally finishes, we need to update that piece of state.
So in Profile and when the response came back, we need to use setProfileData(response.data) to update the profileData state.

So now when you visit the profile of someone, you can see for a little time, you see the placeholder values(initial state values), but after
response came back, we see the response data.

After using those new pieces of state and NOT using that setProfileData() function to update state when the response came back, if you
see the browser, you can see for example that ... for username and that default avatar and ... .

40-2. Load Posts by Author:
Let's pull in the posts that a user has created. Let's move that <div className="list-group"> which currently is in Profile, to it's own
separate comp and we call it ProfilePosts. But why we did this?
Because eventually we're gonna setup client side navigation so that when you click on followers or following, that would swap our or switch
the contents in that <div className="list-group">. In other words, we're gonna want to change which content is displayed in the place where
currently <div className="list-group"> lives, depending on which navigation link you've clicked on. Therefore, we need to move that
<div className="list-group"> to live in a separate file, so that it's easy to switch back and forth between different content.
Then in Profile, we need to import that newly created comp in where it's content was lived before.

So now when you have some navigation links which with them you want to change some html to be based on the route we're currently in,
you need to move that html to a SEPARATE FILE.

We gave an initial value of true to useState() of isLoading in ProfilePosts, because when you FIRST COME TO THAT PAGE(profile page)
and that ProfilePosts comp is rendered, the actual raw data for those posts will still be loading and it's not successfully loaded YET.
So it makes sense to set it(isLoading) to true and then once our request has actually loaded the data, we can update isLoading with help
of setIsLoading to be false. As long as isLoading is true, we show an animated loading icon or the word loading and then once it's set to
false, then we can show that real content.

So we can setup and if statement and instead of that huge jsx, we can return another jsx that we specified inside that if statement.

Now let's create a piece of state that will STORE the raw data for all of the posts(the posts that would come back from http request) and
I named that piece of state, posts.

When you want to send an http request when the component is rendered, you DON'T just want to write that request without wrapped in a useEffect()
and therefore just a plain request inside the body of function comp. INSTEAD, we want to include that request within a useEffect() call.
WHY?
Important: Because remember in react, the function of the component is going to run, ANYTIME STATE CHANGES OR ANYTIME ANY PARENT PROPS
 THAT ARE BEING PASSED INTO THAT COMPONENT, CHANGE.
Therefore we need to use useEffect() to only send that request once. Also I just passed an empty [] meaning we only want to run that
useEffect()'s first arg function when that component first renders.
Inside useEffect() we defined an async function and then right after we defined that async function, we immediately call it because we can't
make the function we passed to first arg of useEffect() can't be async at this time. In other words, you can't pass useEffect() an async
function directly.

Important: In react, when you're looping through an array and rendering sth for each one(each item in that array), you do want to give each element
 a unique key. So on the parent element of the thing that you're rendering for each item in that array, give that parent element a prop named
 key and for the value of that key, choose sth that would be unique for each of those items, like the _id in mongodb for each document.
So I added a key prop to <a> element, because that's the parent element of all returning jsx, inside map(). (but later we will convert
this <a> element to <Link> component).
In case of ProfilePosts comp, in addition to title and body content, the server is also giving us the unique _id for each post, because each
post is a document in our mongodb.

With traditional html, if you have just one character of white space, that space is rendered to the browser. But in react, well, react doesn't
honor the whitespace in between elements or comps. Therefore in ProfilePost, we added a {' '} (quotes with a space) after that <strong> tag,
so the texts in that place don't stick to each other(and we couldn't just add a space there, because react doesn't honor just a simple whitespace).

So in react, if your html layout actually depends on whitespace, this is the way around it: {' '}. So now between the name of the post and the
word 'on' we have a single whitepsace character.

We created a variable called date and assign it the new Date() object, but, based on string of text that the server sent which represents
the data the post was created on. So I passed that data which server sent to us in () of new Date() .
But new Date(post.createdDate) doesn't look pretty to human eye, so we need to format it, because there's many different ways to display a date.

I intentially declared those date and dateFormatted variables INSIDE the function we passed to map(), because I want to EACH ITEM IN THAT
posts variable, to have those 2 date and dateFormatted variables to show them inside it's jsx. So it's good to create those 2 variables
inside the map() , because inside So I created that dateFormatter variable.
Also I added + 1 to date.getMonth() because dates are zero based, but in real life we don't consider january to be the 0 month.

We don't want to return an actual <a> element because we don't want the browser to actually render an entirely new html document. Instead we
want to use client side routing. So we need <Link>. So let's get easy access to Link, so let's add Link inside {} when importing it from
it's npm package.*/
/* 41-3. Make Single Post Screen Actually Load The Real Content:
In ViewSinglePost, let's being by setting up 2 pieces of state. When that ViewSinglePost comp first renders, we won't IMMEDIATELY
have that post content ready to display yet. Therefore, let's create an if statement and there, check for isLoading value and if
isLoading is true, return some jsx. Once the response get back from the server, then we can render the actual jsx instead of loading indicator.

Currently, after changing the value of title prop in <Page title={}> to post.title , you STILL see the title of a single post page doesn't
change, even if you refresh the page or go to another single post page. Why?
Because this has to do with the nature of our Page comp. Currently if you look at the Page comp, you see that we're setting the
document.title inside a useEffect and that useEffect isn't watching for any dependencies and that means it would only show the
FIRST EVER props.title it get. So if you change the dependencies that useEffect() is watching for, to include props.title the problem will be
solved. Because at the first place, we were telling react to only run that first arg function, the very first time that Page comp is rendered,
BUT now we see that line of code which says: document.title = ... ; should actually run, anytime the title(which is in the props object of
Page comp) changes, not just the first time that Page comp is rendered.

We need to make things up, so if you're the owner or author of that post, in that case you can see those 2 edit and delete icons in a single
post page.

We'll also look how to simulate a slower network connection to see that loading icon. Why?
Because yest it's super fast for us because the backend server is running on OUR computer, but in the real world, once we push our app up onto
the web, it would be take more, to load that content for the visitors of our site.

42-4. Animated Loading Icon:
Let's setup a reusable animated loader icon comp. So instead of just piece of text that says: Loading... , let's actually create a reusable
comp that we can use throughout our app that displays an animated loading icon.

But first let's simulate a slower connection. Go to devtools/network tab, instead of that online dropdown value, we want to throttle our
connection, we want to simulate a slower connection, so click on "slow 3G" and then refresh. In real world, that's likely what our visitors
will see.

The empty second <div> that we have inside <div className="dots-loading"></div> , is necessary for the css animation.

After adding LoadingDotsIcon comp to ProfilePosts comp, tutor ran into a bug. WHY?
Because our automated webpack setup, automatically injects our updated JS into the browser. But since we're simulating a slow connection,
somewhere that introduced a bug and the tutor's screen just sat blank for a very long time. To fix that, go to network tab and temporarily
set that 3G to online, so no longer throttling the connection and then, once we've SAVED our JS, you can just put it back to slow 3G to again
simulate the slow connection and now if you manually refresh, now you should be able to test and see your loading icon displays again.

Currently we have an issue and that's: when you click on one of the posts and then AS SOON AS we see the loading icon(which means the http
request is STILL waiting to hear back from the server), we're gonna INTERRUPT things by navigating away like going to home page.
So click on a post and then immediately(before the response comes back and loading icon gets removed), click on homepage for example.
Now we have an error that says: "Warning: Can't perform a React state update on an unmounted component. This is a no-op but it indicates
a memory leak in your app. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function."
We'll look at what's that error and and more importantly, how to fix or prevent it.

43-5. Cleaning Up After Ourselves (useEffect):
We need to cleanup after ourselves. So we saw if you navigate to a post but then immediately click back to the homepage before http request
in that single post arrives and loading icon actually completes, in console you're gonna see an error.

In ViewSinglePost, we're using axios to send off a request and we have no way of knowing how long that request is going to take. So we
wait for it to finish and THEN we update the state.
Important: The problem is that you can't update the state for a component that is NO LONGER MOUNTED OR BEING RENDERED to the screen.

So here's what's going on: For example imagine that axios request in ViewSinglePost takes 3 or 4 seconds to complete. But during those 3 or
4 seconds, the user clicks away back to the homepage. Well then another 3 or 4 seconds the code AFTER(because it's an async task and
the code after it, is waiting for it to complete by using await keyword) that axios request is STILL going to attempt to be executed,
only this component is not EVEN in the picture any longer! Therefore, that's a waste of memory or a wast of computer resources. In other
words, why we should still execute some code for a component that is not in the screen anymore?

To get around this problem, ANYTIME we perform an async action within a useEffect(), we want to be sure to cleanup after ourselves.
What I mean is within useEffect() or I should say within the function that we give to useEffect(), we can RETURN a cleanup function.
So in ViewSinglePost comp, after calling fetchPosts(); , we need to return a cleanup function. You COULD create a named function, but in that
case, we can just setup an (anonymous) arrow function and that function will run, when that component is unmounted or when it stops being
rendered. So in this case, within our cleanup function, we would just want to cancel that axios request.

Cleaning up is not limited to just async network requests. It's bigger than that. It's this idea that when a component is unmounted or is no
longer being used, you want to cleanup after yourself. So aside from just an axios request, you might imagine that a comp might add
keyboard bindings to listen for a certain key being pressed. Perhaps a full screen search overlay, you'd want to bind in action to when the
user presses the escape key to close that fullscreen modal. But then once that comp is no longer being rendered, you'd want to remove that
keyboard event listener.
Essentially the cleanup function(the function that we return in a useEffect()'s first arg function) is just your chance to pickup after
yourself after that comp is no longer being used.

So now we need to cancel an axios request. First of all when we CREATE the axios request, we need a way to identify it so that we can access
it later on to cancel it. So in order to identify that request in ProfilePosts, we want to give it a cancel token. For doing that, right at
the beginning of function that we're giving to useEffect() , let's create a variable in that SCOPE, so we can access it down there. So we
didn't create or declare that variable inside that async function or it's try block, because otherwise, it wouldn't be accessible from outside of
that block. So let's create a variable named ourRequest.

Axios.CancelToken.source() generates a token that can be used and now we want to identity that actual request to /post/${id} . Currently
we're giving that /post/${id} request, one arg of the url we want to send a request to, but let's give it a second arg which would be
an object.

So now we have a way of identifying that specific request(the GET request to '/profile/${username}/posts'), so now we just want to
cancel it at the appropriate time.
When the page gets too long to response when it WAS on slow 3G(throttling), you need to change it to online and then perform a refresh and
then back it to slow 3G.

So now if you visit a post and then immediately navigate away, in the console you don't see that error message. Now we do see that log:
there was a problem, but that's our own custom message. Why?
Because our axios request lives in a try block, well, when we cancel it, that's gonna trigger our catch block. So we could update the message
in console.log() of catch block to: there was a problem or the request was cancelled. The point is, we're no longer trying to update
state for a comp that's no longer even mounted(why? because when the request actually came back, we're gonna update the state, but when
the request is cancelled, that state update won't be executed at all).
Now go to Profile and ProfilePosts comp and make the same change. Your app will definitely work without setting this up, but if you want to
do things the right way, do this refactor(cancel the request within your cleanup function that gets returned within (first arg of) useEffect).

We want to support different types of text formatting within the actual body content of a post. So that way users can make text, bold or
italic or actually have multiple paragraphs or headlines. */
/* 44-6. Markdown in React:
Let's look at how to render markdown formatted text within react.
In markdown you can wrap a text inside 2 asterisks to make it bold: ***blue** . For making it italic use 1 asterisk. If you want heading level 3,
you can use 3 hashtags: ###hello and then press enter for rest of the text. For heading level 2, 2 hashtags and ... .
So the idea is there are those codes or simple text formatting that you can include that will result in actual HTML formatting.
Also just including a dash and then an item ALL IN ONE ROW like below, will created a bulleted or unordered list.

Currently, if you use these markdown features, you won't get those desired results which we can see that result in ViewSinglePost and
even if you hit enter, if will be all in 1 line instead of 2 lines. That's because we need to PARSE that content as markdown and in our app,
we would want to this on the client side or on the web browser side instead of the server side. Because we're using react and
client side routing. So let's add markdown support WITHIN react. So install: npm i react-markdown

Then in ViewSinglePost, get rid of {post.body} which currently is in main(because we have 2 returning jsx in that comp, right?) returning jsx and
add: <ReactMarkdown /> and to source prop of ReactMarkdown comp, give it the RAW text(in this case, post.body) that we want to INTERPRET as
markdown. Now you can see that created post with markdown, with actual markdown!

Sometimes you don't want the users of your website to be able to create ANY element they want. So instead of allowing for all default markdown
elements, you can actually specify WHICH ones you want to ALLOW. So used allowedTypes prop. 'heading' means h1 to h6 in allowedTypes array and
'list' means bulleted list or numbered list*/
/* SECTION-8. Edit & Delete Post Actions:
45-1. Adding Tooltips on Hover for Actions:
The react ecosystem is full of all sorts of plugins or packages or we should call them, pre-existing comps. So let's grab a package from npm that
will make it easy to create tool-tips. So: npm i react-tooltip . Now in ViewSinglePost comp, after the href attr of
<a className="text-primary mr-2" title="edit">, add another attr or prop and it NEEDS to be named, data-tip="" and the value of this prop is the
text that users will see when they hover over it. Then give that <a>(or actually <Link>) element another prop called data-for.
Why we used this data-for? Doesn't it feel redunant? No, you'll see where this comes into play in a moment.
Now right after that <Link> of edit, use ReactTooltip comp and we give it an id that matches that data-for prop that we set earlier, so edit and
not Edit(Edit is for data-tip but we want to match data-for). Now the tooltip is working.

Currently you notice that if we hover in one spot, in ADDITION to just seeing that custom tooltip, we ALSO see the web browser's default "edit"
label. To get rid of that, on the <Link> we need to get rid of title attr.

We need to add some horizontal spacing between two icons. Originally, in the html, it did include extra space there, however in react,
when elements sit on different lines like:
<a>...</a>
<a>...</a>,
react doesn't add in any whitespace when it renders the html to the browser. So to get around this, in between the first <ReactTooltip> and the
delete icon, add a {' '} (between quotes, there's a space). That was an extra bit of spacing.

46-2. Edit (Update) Post Component:
Just to make sure there's no confusion between those /post/:id and /post/:id/edit routes, on both of them(viewing a single post and
editing a single post), let's give them an attr of exact.

After giving an input a value attr, if you try to type in, you notice that nothing happens and you can't type anything! This is because by
giving an <input> a value attr, react considers it a controlled input. In order to be able to type in, we would need to give them onChange prop.
Also we want to add client side validation to EditPost form which makes if you leave either of those fields completely blank, we don't even
want the user to be able to send a request to the server.

We're gonna set things up so that we use a reducer and a dispatch and then the state that our reducer manages, that's what we can send to the server
when you actually try to submit that edit post. Now I do want to point out that you don't NEED to use reducer in order to do more complex
things in react. But actually it's easier to work with complex logic and state objects when you use a reducer.

First we need to use useImmerReducer() in EditPost, so: const [state, dispatch] = useImmerReducer();

Remember that the first arg of useImmerReducer() is a function that will server as our reducer and the second arg is our initial or original state.
In this case, for initial or original state, we can set up an empty object which I named it original state.

For properties of originalState, we start giving it all of the properties that we know we'll need. So we're definitely gonna need sth to
HOLD(because it's a state right?) the title value as well as the body content value. However let's think of the future, if we eventually want to
add client side validation, we'd also want to keep track of them if one of those fields has an error. So instead of a simple value for title property,
we give it an object, so by doing that, it can have multiple properties.
We'd also want a property that keeps track of whether the initial post data has loaded or not, which as usual name it loading and by default we
set it to true, because when you first come to the page, that's what the browser is gonna be busy doing loading or fetching that data.
Also we added isSaving property, so that's the property we'll work with, when you actually click that save updates button to send that
request. So the milliseconds you click that button, we'll set isSaving to true and then once we hear back from the axios's request, we can
set it back to false. This way we can cool things like have that button to be grey out or disabled, so you can't click it a second time accidentally,
while the first request is still processing.

So a cool trick is to also create a separate state for when the user clicks on a button to send a request and then that state is set to true and then
when the response comes back, we can set back that state to false. Like what we did with isSaving state in EditPost.

The sendCount is where we can keep track of how many times we've tried to send an axios request.

Essentially this way, ALL of our logic can live in our reducer and then if we increment the value of sendCount, the actual code that sends off an
axios request can live in a useEffect() that watches this piece of state(sendCount) for changes.
So now we have setup our initial state.

So before we worry about actually submitting that form, let's first think about the data that we're loading when the page loads. So we're actually
dealing with two axios requests in EditPost. The first request is like a readonly request, because it's just pulling in the existing title and
body values for that particular post that we're seeing. So let's make sure that that data is getting into our state, now that we're using a
reducer.
First make some cleanings, because now that we're using ourReducer, we no longer need those 3 lines of useState() and useParams() . Also remove
the setPost() and setIsLoading() inside useEffect() and instead, let's use our dispatch and give it the type of action with type property. So
we used a descriptive name for the completeness of fetch and I named it 'fetchComplete', now in our reducer, let's create a case within a switch
with that matching name('fetchComplete'). Important: Essentially we're just saying what should happen to our state, when this action occurs.
First of all in () of ourReducer() give it 2 params which are draft and action. The value property of action is the object that server server sent
back to us in case of fetchComplete of course!, so it's not always true! So in other cases, the value property might have other meaning.

Also we replace loading and saveIsLoading names to isFetching and isSaving names in our initial state object.*/
/* 47-3. Edit Post Continued:
*/


/* My notes:
Because I think jsx is special, when you import some comp into another comp, you need to SPECIFY the jsx EXTENSION. But if you're
importing a normal js extension file, you don't need to specify that .js .

If you change the extension of files from jsx to js or vice versa, you need to re-run the development server.*/
