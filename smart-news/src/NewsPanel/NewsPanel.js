//import './NewsPanel.css';
import _ from 'lodash';
import NewsCard from '../NewsCard/NewsCard'

import React from 'react';

//import Auth from '../Auth/Auth';
//import NewsCard from '../NewsCard/NewsCard';

class NewsPanel extends React.Component{
    constructor() {
        super();
        this.state = {news:null};

    }

    componentDidMount() {
        this.loadMoreNews();


    }

    loadMoreNews() {
         this.setState({
             news: [
                 {"_id":{"$oid":"58a424c2736c5898466e59f4"},"description":"President Donald Trump told Israeli Prime Minister Benjamin Netanyahu Wednesday that the US is going to push for a peace deal with the Palestinians and asked Israel \"to hold back\" on settlement construction.","title":"Trump: Netanyahu should 'hold back' on settlements","url":"http://us.cnn.com/2017/02/15/politics/netanyahu-trump-white-house-visit/index.html","text":"Washington (CNN)President Donald Trump told Israeli Prime Minister Benjamin Netanyahu Wednesday that the US is going to push for a peace deal with the Palestinians and asked Israel \"to hold back\" on settlement construction.\"I'd like to see you hold back on settlements for a little bit,\" he said, a stronger opposition to the controversial building in the West Bank than he's previously articulated.Trump made the statements at a news conference welcoming the Israeli leader to the White House for their first face-to-face meeting since the inauguration.\"The United States will encourage a peace, and really a great peace deal. We'll be working on it very diligently,\" Trump said. \"But it is the parties themselves who must directly negotiate such an agreement.\"To achieve that deal, the President said, \"The Israelis are going to show some flexibilty\" and \"they have to show they really want to make a deal.\"For the Palestinians, he said, \"You can talk about flexibility there, too,\" saying they \"have to get rid of some of the hate that they're taught from a very young age.\"Trump also signaled that Arab countries would be invited to help with negotiations to \"make it easier\" to achieve a peace deal. \"I also believe that we're going to have other players at a very high level and I think it might make it easier on Palestinians and others.\"Trump declined to say whether he favored the two-state solution his past two predecessors have pursued in the region, instead saying he is \"looking at two state and one state and I like the one that both parties like.\"On Tuesday night, the Trump administration signaled a major break with bipartisan US policy by not issuing a call for a two-state solution to the Israeli-Palestinian conflict. A senior US official said Wednesday that \"it's not for us to impose that vision.\"RELATED: Netanyahu, Trump rekindle US-Israel bond as Mideast tensions loomTrump also spoke of Israel and America's joint opposition to Iran's nuclear ambitions, repeating a frequent criticism of the deal between Tehran and six world powers worked out under the Obama administration.\"I will do more to prevent Iran from ever developing -- I mean ever developing -- a nuclear weapon,\" Trump said, referring to recent sanctions slapped on the country for a missile launch.The encounter Wednesday is expected to be the start in a warmer chapter in US-Israel relations after years of discord between Netanyahu and the Obama administration.Netanyahu arrives at a White House in turmoil following the resignation of national security adviser Michael Flynn and CNN's report that top Trump campaign officials, including Flynn, were in contact with suspected Russian operatives during the campaign, according to multiple former and current officials.The topic of Russia's role in the Middle East is likely to be among the issues the leaders discuss, as Moscow has played a key role in bolstering Syrian President Bashar al-Assad in the Syrian civil war. Iran and Israel's relations with Arab neighbors as well as the peace process are also anticipated to be major topics.RELATED: Where Donald Trump and Benjamin Netanyahu stand on the key issuesTrump and his advisers have signaled that he will seek to strike a much friendlier stance toward Israel, a change Israeli officials have welcomed after the combative and at-times bitter relationship between Netanyahu and President Barack Obama.Still, his administration's policy toward Israel is not yet fully formed. That could provide Netanyahu with an opening to influence that policy during his visit on Wednesday, but it also means that Trump has backed off some of his bolder statements backing Israel's positions.During the presidential campaign, he encouraged Israel to \"keep going\" with its construction of settlements in the West Bank. But Trump said in an interview last week that he believes settlements \"don't help the process\" and are not a \"good thing for peace,\" before his even sharper language Wednesday.He has also stepped back from his campaign pledge to move the US Embassy from Tel Aviv to Jerusalem, now saying he is \"studying\" the issue.Trump also said during the campaign that he would recognize Jerusalem as Israel's \"undivided\" capital -- a controversial move that since current US policy is to address Jerusalem's status in a final peace agreement. Trump has not signaled whether he will follow through on that pledge. ","author":"Jeremy Diamond, CNN","publishedAt":{"$date":"2017-02-15T17:40:40.000Z"},"source":"cnn","urlToImage":"http://i2.cdn.cnn.com/cnnnext/dam/assets/170215112939-donald-trump-benjamin-netanyahu-split-super-tease.jpg","digest":"nmuYSK3LFDb7SY727Ibonw==\n"},
                 {"_id":{"$oid":"58a424c3736c5898466e59f5"},"description":"President Donald Trump and Israeli Prime Minister Benjamin Netanyahu hold a joint press conference at the White House.","title":"Trump: UN treats Israel 'very, very unfairly' - CNN Video","url":"http://us.cnn.com/videos/politics/2017/02/15/trump-netanyahu-joint-press-conference.cnn","text":"","author":null,"publishedAt":{"$date":"2017-02-15T09:50:01.000Z"},"source":"cnn","urlToImage":"http://i2.cdn.cnn.com/cnnnext/dam/assets/170215121910-trump-netanyahu-joint-news-conference-3-super-tease.jpg","digest":"n0GWi/32LzHUyxG8IRggWg==\n"},
                 {"_id":{"$oid":"58a424c5736c5898466e59f6"},"description":"\"Tomorrow's world will be different -- and it is very near.\" Those were the words of Israeli Prime Minister Benjamin Netanyahu as he dismissed last month's Mideast peace conference in Paris as \"useless,\" instead focusing on the inauguration of US President Donald Trump just days later.","title":"Where Trump and Netanyahu stand on key issues","url":"http://us.cnn.com/2017/02/15/politics/trump-netanyahu-white-house-meeting/index.html","text":"Jerusalem (CNN)\"Tomorrow's world will be different -- and it is very near.\"   Those were the words of Israeli Prime Minister Benjamin Netanyahu as he dismissed last month's Mideast peace conference in Paris as \"useless,\" instead focusing on the inauguration of US President Donald Trump just days later.This new world, one both Trump and Netanyahu hope to create from what they see as the ruins of the previous presidency, will include not only the future relationship between Israel and the United States but the renewal of ties after eight years of perceived mutual loathing under President Barack Obama.By the time the Obama administration vacated the White House, just weeks after the United States broke with  precedent by not vetoing a United Nations Security Council resolution condemning Israel's settlement activity, the relationship had gone from cold to positively arctic.Netanyahu, enraged by the move, has made no secret of his dislike for Obama while championing the arrival of Trump.\"We have known each other for years, but this will be his first meeting since being elected as President of the United States and mine as Prime Minister of Israel,\" Netanyahu said at this week's Cabinet meeting.The Iran deal, the peace process and the constant speculation over moving the US Embassy from Tel Aviv to Jerusalem are all likely to be on the agenda. Here's how the two men shape up on the big talking points ahead of Wednesday's meeting.IranNetanyahu's view:The Joint Comprehensive Plan of Action -- or Iran Deal -- was inked in 2015. According to officials, the agreement extends the time it would take for Tehran to develop a nuclear weapon from two months to more than a year.The five permanent members of the UN Security Council plus Germany agreed to the deal that saw sanctions eased on Iran in return.Netanyahu lobbied hard against the deal that sought to curb Iran's nuclear ambitions, saying the agreement would only pave \"Iran's path to the bomb.\" He presented his case before the UN General Assembly and went behind President Barack Obama's back to present it to the United States Congress. But as he has made clear on a number of occasions, Netanyahu sees Iran as an existential threat, hell bent on the destruction of Israel.READ: Rouhani warns Iran will not be bullied Trump's view:Netanyahu believes he has found an ally in Trump, who has been an outspoken critic of the Iran Deal, calling it \"one of the worst deals ever.\"The new US President has already slapped sanctions on Tehran for a ballistic missile test but neither he nor Netanyahu have offered a clear alternative to the deal.Members of Trump's administration also have urged caution on scrapping the deal. During his confirmation hearings, Defense Secretary James Mattis said: \"When America gives her word, we have to live up to it and work with our allies.\"Trump faces a conundrum whereby European allies want the deal to remain in place, while Israel wants a harder line.SettlementsNetanyahu's view:One issue on which Israel virtually stands alone is settlements -- the Israeli cities, towns and communities in the West Bank and East Jerusalem. \"On the issue of settlements, no one takes more care than me and the Likud government,\" the Prime Minister said at his weekly Cabinet meeting on January 22. \"We will continue to take care of (the settlements) with wisdom and responsibility for the benefit of the settlements and the state of Israel.\"Six thousand new settler homes as well as a brand new settlement have been announced by Israel in the last four weeks.The international community condemns settlements as illegal, which Israel disputes. Previous US presidents have described settlements as an \"obstacle to peace.\"Last December, the UN Security Council issued its strongest condemnation to date, saying settlements have \"no legal validity\" and \"constitute a flagrant violation of international law.\" The US, which has veto power, abstained from the vote.Following the decision, Israel accused the US and the Obama administration of betrayal. Trump's view:In Trump, Israel hopes it will find a slightly more sympathetic ear.Trump has previously donated to a settlement, Beit El, and nominated pro-settlement figure, David Friedman, to be the next US ambassador to Israel.But in the last fortnight, the Trump administration has begun to make noises suggesting it wants Israel to put the brakes on settlement activity, calling recent expansion announcements \"not helpful.\"In a recent interview with the Israel Hayom newspaper, Trump described himself as \"not somebody that believes that going forward with ... settlements is a good thing for peace.\"But the pro-settler movement in Israel remains buoyant. Israel's Knesset just passed a law, known as the Regulation Law, which serves to legalize many dozens of settler outposts built on private Palestinian land.The law is now expected to be contested in Israel's Supreme Court.Peace processNetanyahu's view:The bedrock of the peace process, as understood by the international community, is the two-state solution.Successive US presidents, both Republican and Democratic, have supported this goal.Equally, both Israelis and Palestinians have expressed their commitment to two states living side by side.\"In my vision of peace, there are two free peoples living side by side in this small land, with good neighborly relations and mutual respect, each with its flag, anthem and government, with neither one threatening its neighbor's security and existence,\" said Netanyahu at Bar Ilan University in 2009.Fast-forward to 2017 and many in the international community wonder whether Netanyahu's actions on settlements mean he has any intention to stick to that position.But Israel's Prime Minister rejects such criticism. He says blame for the failure to move the peace process forward lies with the Palestinians and their refusal to recognize Israel as a Jewish state.Trump's view:Trump has called a successful resolution of the peace process \"the ultimate deal.\" But it's eluded US presidents since the founding of the state of Israel almost 70 years ago.He says he wants his son-in-law and senior adviser Jared Kushner to lead his diplomatic efforts in the region. But Kushner is untested in foreign policy and a largely unknown quantity in the Middle East.Any efforts to broker peace will come up against entrenched positions.Israel's far right now talks openly about annexing the West Bank, a threat which Palestinians are taking seriously. In response to the passing of the Regulation Law on settler outposts, Saeb Erekat, the Secretary General of PLO's Executive Committee said: \"All Israeli settlements in occupied Palestine are illegal and a war crime regardless of any law passed by the Israeli Parliament or any decision taken by any Israeli judge. The Israeli settlement enterprise negates peace and the possibility of the two-state solution.\"US EmbassyNetanyahu's view:It was only last month while speaking to his Cabinet that Netanyahu made the clearest declaration yet on the embassy question telling ministers: \"Jerusalem is the capital of Israel, and it is proper that not only should the American Embassy be here, but all embassies should come here.\"If the US moved its embassy to Jerusalem, it would be seen as effectively recognizing Jerusalem as the capital of Israel.Such a move would overturn 70 years of international consensus, that Jerusalem's status should be settled in a final peace agreement, and, some argue, would effectively signal the end of moves to achieve peace between Israelis and Palestinians.As far as the international community is concerned, East Jerusalem is the capital of a future Palestinian state. READ: Why moving the US embassy to Jerusalem is so controversialTrump's view:During his campaign, Trump pledged to move the US Embassy from Tel Aviv to Jerusalem, but he appears to be tapping the brakes.He hinted that the prospect of moving the embassy's location would be part of a great peace deal but gave little specifics in an interview published by Israel Hayom on February 10. This is more in line with previous White House administrations, which have all exercised the presidential waiver over the 1995 Act of Congress which calls for the embassy to be moved.\"The embassy is not an easy decision. It has obviously been out there for many, many years, and nobody has wanted to make that decision,\" said Trump. \"I'm thinking about it very seriously, and we will see what happens.\"Significantly, in addition to being popular among many Israelis, Trump is also riding a wave of popularity among many Arab leaders, who felt neglected by the Obama administration.These countries are urging Trump not to make a unilateral decision, fearing unrest on the streets throughout the Middle East. Also important is the fact that Israel and a number of its Arab neighbors have enjoyed a warming of relations in recent years, built around a common enemy, Iran. This backroom diplomacy would likely take a hit if the US Embassy changed its address. SyriaNetanyahu's view:Israel has been keeping a close eye on Syria's six-year civil war from across the border in the Israeli-controlled Golan Heights -- which the international community considers to be occupied territory.\"I don't know if we can resolve (the Syria civil war) but we can help mitigate some of the suffering. That's the best that Israel can do. Of course we don't let the Syrian war or aggression from Syria spill over into our territory you know our position, my red lines -- we keep them stringently,\" Netanayuhu explained in December.Occasional spill over from the war has been met with force by Israel's army.READ: Injured Syrians find treatment in IsraelBut Israel's real concern isn't the occasional rogue shell, it's what the resurgence in the fortunes of President Bashar al-Assad might mean for arguably one of Israel's most dangerous foes.\"Hezbollah is a main threat for the state of Israel. They are tied up in Syria today but they have not put down those arms that are pointing towards Israel,\" says Israeli military spokesman, Lt. Col. Peter Lerner.In return for supporting an ally, Israeli officials say, Syria is smuggling advanced weapons to Hezbollah. Several times in recent months, Syrian state media has reported alleged Israeli airstrikes near Damascus. They're believed to be targeting arms bound for Lebanon. Israel never comments.READ: Trump defends travel ban as Trudeau looks onTrump's view:Trump has yet to set out any clear policy on what he wants to achieve in Syria in terms of ending the violence.He has been praised by President Assad, who believes Trump could become an ally and help in the fight against ISIS.In terms of refugees, last month Trump stated he will \"absolutely do safe zones in Syria,\" for refugees fleeing the violence.But his travel ban, against seven Muslim-majority countries, including Syria, has caused huge controversy both at home and abroad.During his first televised interview as President, Trump said that Germany and other European countries had made mistakes by allowing millions of refugees across their borders.\"I don't want that to happen here,\" he told ABC News.","author":"Ian Lee and James Masters, CNN","publishedAt":{"$date":"2017-02-15T08:17:28.000Z"},"source":"cnn","urlToImage":"http://i2.cdn.cnn.com/cnnnext/dam/assets/170214145025-trump-netanyahu-graphic-header-super-tease.jpg","digest":"rHg2y6cPsDuXYE3sjYb1GA==\n"}

             ]
         })
    }

    renderNews() {
        let news_list = this.state.news.map(function(news) {
            return(
                <a className='list-group-item' href="#">
                    <NewsCard news={news} />
                </a>
            );
        });

        return(
            <div className="container-fluid">
                <div className='list-group'>
                    {news_list}
                </div>
            </div>
        );
    }

    render() {
        if (this.state.news) {
            return(
                <div>
                    {this.renderNews()}
                </div>
            );
        } else {
            return(
                <div>
                    <div id='msg-app-loading'>
                        Loading
                    </div>
                </div>
            );
        }
    }
}

export default NewsPanel;
