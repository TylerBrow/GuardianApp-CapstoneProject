import React from 'react'
import Notifications from '../notifications/Notifications'
import '../notifications/Notifications.css'
import Navbar from '../nav/Navbar'
import '../main/Main.css'
import '../nav/Navbar.css'
import './Tips.css'

class Tips extends React.Component {
    render() {
        return (
            <div>
                <div className="navdiv">
                    <Navbar props={this.props}/>
                </div>

                <div className="homepage">   
                    <div className="notificationreminders">
                        <h1>Notification Reminders</h1>
                        <Notifications />
                    </div>

                    <div className="main">
                        <div className="advice">
                        <h1>Tips &amp; Advice for Alzheimer's</h1>
                        <p className="safety">
                            <span>Safety first:</span> there an immediate safety risk for the person with dementia to perform this task alone? If there is no immediate risk of injury or harm, provide encouragement and continue to provide supervision as necessary.<br></br><br></br>
                            
                            <span>Avoid stress:</span> Prioritize tasks or actions that do not cause unnecessary stress for the person with dementia. For example, if you know that grocery shopping will be frustrating for the person with dementia, ask for their participation to outline a weekly menu and organize a grocery list.<br></br><br></br>
                            
                            <span>Make a positive assumption:</span> Assume that the person with dementia is capable of completing the task. If you sense frustration, try to identify the cause of the frustration before intervening. Focus on his or her current needs, rather than dwelling on the future.<br></br><br></br>
                            
                            <span>Create a help signal:</span> Identify a cue or phrase that you can use to confirm if the person with dementia is comfortable receiving support. For example, you may agree to use a phrase like, “Is there anything I can do to help?” or a nod to signal that it’s ok to chime in if the person with dementia is having difficulty remembering a word or name.<br></br><br></br>
                            
                            <span>Talk it over:</span> The best way to determine how and when to provide support is to ask directly. Ask the person with dementia what they need or the frustrations they may be experiencing. Talk about it, then make a plan.<br></br><br></br>
                            
                            <span>Work better together:</span> Find activities to do together and keep the conversation going about expectations for how you will provide support. Check in regularly by asking the person with dementia if you are providing a level of assistance that is comfortable or adequate.</p><br></br>

                            <h2>Maximizing independence</h2><br></br>
                            
                            <p className="while">While every person experiences the early stage of dementia differently, it is common that a person in the early-stage may need cues and reminders to help with memory. As a care partner, it may be necessary for you to take the initiative to determine how you may be able to help. For example, he or she may need help with:<br></br><br></br>
 
                            <span>Keeping appointments</span><br></br>
                            <span>Remembering words or names</span><br></br>
                            <span>Recalling familiar places or people</span><br></br>
                            <span>Managing money</span><br></br>
                            <span>Keeping track of medications</span><br></br>
                            <span>Planning or organizing</span><br></br>
                            <span>Transportation</span><br></br><br></br>
                            Focus on the person's strengths and how they can remain as independent as possible, and establish a strong channel of communication. Consider ways to work together as a team. For example, if they are still comfortable balancing a checkbook, you may offer to provide a final review.</p><br></br>

                            <h2>Here are tips on how to maintain your own health:</h2><br></br>

                            <p>Think about ways you can get support now. For example, include an afternoon to yourself in your monthly schedule. <br></br>
                            Ask others to visit or go to lunch with the person living with dementia while you're away.<br></br>
                            Build a support network. Creating a support system before you think you need it will minimize your stress as the disease progresses. Look at current support systems you have already in place and consider the people you turn to most often in times of need.<br></br>
                            Connect with other care partners to acquire encouragement and comfort from others who understand what you're going through. Learn more about in-person and online support groups.<br></br>
                            Ask for and accept help. Care partners often wait too long before asking for help from others.<br></br>
                            Rest when needed and allow time for yourself and your own interests.<br></br>
                            Try not to take things personally; symptoms of the disease can cause an individual to forget events or commitments. Remember this is not a reflection of his or her character.<br></br>
                            Stay healthy through diet, exercise and regular visits to the doctor.<br></br>
                            Stay engaged by continuing to be involved in activities that are important to you and enhance your sense of wellbeing.<br></br>
                            Allow yourself the opportunity to laugh when funny situations arise.<br></br><br></br>
                            Learn more: Care Partner Support Groups, Changing Roles in Relationships, Online Community<br></br>

                            Getting empowered with information and resources<br></br>
                            The more you educate yourself about the disease the more confident and prepared you may feel about the future and your ability to solve problems as the disease progresses. Knowing what to expect and putting plans in place can be empowering for you and the person with dementia.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tips