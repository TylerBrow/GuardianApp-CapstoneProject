import React from 'react'
import Notifications from '../notifications/Notifications'
import '../notifications/Notifications.css'
import '../main/Main.css'
import '../nav/Navbar.css'
import './Tips.css'
import Logo from '../logo/Logo'

class Tips extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className="homepage">   
                    <div className="notificationreminders">
                        <h1>Notification Reminders</h1>
                        <Notifications />
                    </div>

                    <div className="tipsmain">
                    <h1>Tips &amp; Advice for Alzheimer's</h1>
                        <div className="advice">
                        
                        <p className="safety">
                        If you are caring for someone with Alzheimer's disease or a related dementia, your role in managing daily tasks will increase as the disease progresses. 
                        Consider practical tips that can help the person with dementia participate as much as possible and enable you to manage tasks effectively.<br></br>

                        <h2>Reduce frustrations:</h2>
                        A person with dementia might become agitated when once-simple tasks become difficult. To limit challenges and ease frustration:<br></br><br></br>

                        Schedule wisely...<br></br>Establish a daily routine. Some tasks, such as bathing or medical appointments, are easier when the person is most alert and refreshed. Allow some flexibility for spontaneous activities or particularly difficult days.<br></br>
                        
                        Take your time...<br></br>Anticipate that tasks may take longer than they used to and schedule more time for them. Allow time for breaks during tasks.<br></br>

                        Involve the person...<br></br>Allow the person with dementia to do as much as possible with the least amount of assistance. For example, he or she might be able to set the table with the help of visual cues or dress independently if you lay out clothes in the order they go on.<br></br>

                        Provide choices...<br></br>Provide some, but not too many, choices every day. For example, provide two outfits to choose from, ask if he or she prefers a hot or cold beverage, or ask if he or she would rather go for a walk or see a movie.<br></br>

                        Provide simple instructions...<br></br>People with dementia best understand clear, one-step communication.<br></br>

                        Limit napping...<br></br>Avoid multiple or prolonged naps during the day. This can minimize the risk of getting days and nights reversed.<br></br>

                        Reduce distractions...<br></br>Turn off the TV and minimize other distractions at mealtime and during conversations to make it easier for the person with dementia to focus.<br></br>
                        
                        <h2>Tips:</h2>
                        While every person experiences the early stage of dementia differently, it is common that a person in the early-stage may need cues and reminders to help with memory. As a care partner, it may be necessary for you to take the initiative to determine how you may be able to help. For example, he or she may need help with:<br></br><br></br>
 
                        Keeping appointments<br></br>
                        Remembering words or names<br></br>
                        Recalling familiar places or people<br></br>
                        Managing money<br></br>
                        Keeping track of medications<br></br>
                        Planning or organizing<br></br>
                        Transportation<br></br><br></br>
                        Focus on the person's strengths and how they can remain as independent as possible, and establish a strong channel of communication. Consider ways to work together as a team. For example, if they are still comfortable balancing a checkbook, you may offer to provide a final review.

                        <h2>Challenges of Alzheimer’s care:</h2>
                        
                        Overwhelming emotions as capabilities lessen<br></br>
                        Fatigue and exhaustion as caregiving demands increase.<br></br>
                        Isolation and loneliness as independence disappears.<br></br>
                        Financial and work complications as costs rise and resources are challenged.<br></br>
                        
                        <h2>Rewards of Alzheimer’s care:</h2>

                        Bonds deepen through care, companionship, and service.<br></br>
                        Problem solving and relationship skills grow through experience.<br></br>
                        New relationships form through education and support.<br></br>
                        Unexpected rewards develop through compassion and acceptance.<br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tips