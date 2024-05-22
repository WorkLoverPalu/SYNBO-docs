<template><div><h2 id="用户使用教程-lpfarm合约" tabindex="-1"><a class="header-anchor" href="#用户使用教程-lpfarm合约"><span>用户使用教程：LPFarm合约</span></a></h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3>
<p>本教程旨在指导用户如何使用LPFarm智能合约进行流动性挖矿。LPFarm合约允许用户存入LP Token来获得奖励，并且提供了一系列的功能，包括存入、领取收益和本金等。</p>
<h3 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h3>
<ul>
<li>用户需要有一个支持以太坊的数字钱包，如MetaMask。</li>
<li>用户钱包中需要有足够的ETH和相应的LP Token。</li>
<li>用户需要知道如何与智能合约交互。</li>
</ul>
<h3 id="步骤1-连接钱包" tabindex="-1"><a class="header-anchor" href="#步骤1-连接钱包"><span>步骤1：连接钱包</span></a></h3>
<ol>
<li>打开您选择的数字钱包应用。</li>
<li>确保您的钱包已连接到部署LPFarm合约的以太坊网络。</li>
</ol>
<h3 id="步骤2-授权lp-token" tabindex="-1"><a class="header-anchor" href="#步骤2-授权lp-token"><span>步骤2：授权LP Token</span></a></h3>
<ol>
<li>在LPFarm合约界面上找到“授权”按钮。</li>
<li>点击“授权”，并选择您想要授权的LP Token数量。</li>
<li>确认交易，等待网络确认。</li>
</ol>
<h3 id="步骤3-查看合约信息" tabindex="-1"><a class="header-anchor" href="#步骤3-查看合约信息"><span>步骤3：查看合约信息</span></a></h3>
<ul>
<li>使用合约提供的<code v-pre>getUserInfo</code>、<code v-pre>getLpToken</code>、<code v-pre>getToken</code>等函数来查看您的LP Token余额、奖励代币地址等信息。</li>
</ul>
<h3 id="步骤4-存入lp-token" tabindex="-1"><a class="header-anchor" href="#步骤4-存入lp-token"><span>步骤4：存入LP Token</span></a></h3>
<ol>
<li>在合约界面上找到“存入”功能。</li>
<li>输入您想要存入的LP Token数量。</li>
<li>选择一个产品ID（如果有多个产品）。</li>
<li>点击“存入”并确认交易。</li>
<li>等待网络确认，并查看您的存入状态。</li>
</ol>
<h3 id="步骤5-领取收益" tabindex="-1"><a class="header-anchor" href="#步骤5-领取收益"><span>步骤5：领取收益</span></a></h3>
<ol>
<li>在合约界面上找到“领取收益”功能。</li>
<li>点击“领取收益”，合约会自动处理并发送您应得的奖励到您的钱包。</li>
<li>确认交易，等待网络确认。</li>
</ol>
<h3 id="步骤6-领取本金" tabindex="-1"><a class="header-anchor" href="#步骤6-领取本金"><span>步骤6：领取本金</span></a></h3>
<ol>
<li>在合约界面上找到“领取本金”功能。</li>
<li>输入您想要领取的订单ID。</li>
<li>点击“领取本金”并确认交易。</li>
<li>等待网络确认，并查看您的本金领取状态。</li>
</ol>
<h3 id="步骤7-查看订单和收益" tabindex="-1"><a class="header-anchor" href="#步骤7-查看订单和收益"><span>步骤7：查看订单和收益</span></a></h3>
<ul>
<li>使用<code v-pre>getUserOrders</code>函数来查看您的当前订单和历史订单。</li>
<li>使用<code v-pre>pendingToken</code>函数来查看您的待领取奖励。</li>
</ul>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3>
<ul>
<li>在进行任何交易之前，请确保您了解交易的详情和可能的费用。</li>
<li>领取收益和本金之前，请确保合约有足够的奖励代币供应。</li>
<li>如果合约被暂停，某些操作可能会受到限制。</li>
</ul>
<h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3>
<p><strong>Q: 我如何知道我的授权额度？</strong>
A: 您可以使用<code v-pre>argInfo</code>函数查看您的授权额度。</p>
<p><strong>Q: 如果我想更改授权额度怎么办？</strong>
A: 您需要先撤销当前授权，然后再重新授权新的额度。</p>
<p><strong>Q: 我可以同时存入多个产品吗？</strong>
A: 是的，只要合约支持，您可以存入多个产品。</p>
<p><strong>Q: 我可以随时领取我的本金吗？</strong>
A: 这取决于产品的具体规则，有些产品可能有锁定期。</p>
<p><strong>Q: 如果我有其他问题怎么办？</strong>
A: 您可以联系合约的管理员或查看合约的官方文档获取更多帮助。</p>
<p>请在使用合约前仔细阅读本教程，并确保您理解了所有的步骤和注意事项。智能合约交互涉及到您的资产安全，请谨慎操作。</p>
</div></template>


