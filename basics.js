// Market Briefing – basics. The daily task only adds glossary terms.
window.MARKET_BRIEFING_BASICS = {
  "updated": "2026-10-27",
  "principles": [
    {"title": "Not investment advice", "text": "The briefing explains what happened and why it may matter. It never tells you what to buy or sell."},
    {"title": "Prices are not live", "text": "Every number has a timestamp and may be out of date. Always check the current price with your bank or broker before deciding anything."},
    {"title": "Explanations are often interpretations", "text": "\"The DAX rose because …\" is usually a trader's view. Markets move for many reasons at once."},
    {"title": "Think long term", "text": "Daily swings are normal. For long-term investors, costs, diversification and staying invested matter more than individual headlines."},
    {"title": "Check the sources", "text": "Every number and every story is linked. For important decisions, read the original source."}
  ],
  "investing": {
    "principles": [
      {
        "title": "Emergency fund first",
        "text": "Keep roughly 3–6 months of expenses in a savings account before investing. Money you may need soon does not belong in stocks."
      },
      {
        "title": "Diversify",
        "text": "Spread money across many companies, sectors and countries. A single company can fail; a whole world index is far less likely to."
      },
      {
        "title": "Costs compound too",
        "text": "Fees and ongoing charges (TER) reduce returns every year. Low-cost index funds keep more of the return for you."
      },
      {
        "title": "Time in the market",
        "text": "Short-term moves are hard to predict. Regular investing over many years (e.g. a monthly savings plan) smooths out timing."
      },
      {
        "title": "Only risk what you can afford to lose",
        "text": "Especially for single stocks and small caps: size positions so a total loss would hurt but not change your life."
      },
      {
        "title": "Know why you own it",
        "text": "Write down in one or two sentences why you bought something and what would make you sell. It protects against panic and hype."
      }
    ],
    "etfVsStocks": {
      "intro": "A common approach among long-term private investors is a \"core and satellite\" set-up. This is a description of a widely used structure, not a recommendation for your situation.",
      "rows": [
        {
          "aspect": "Diversification",
          "etf": "Hundreds or thousands of companies in one product",
          "stock": "One company – its fate decides your result"
        },
        {
          "aspect": "Effort",
          "etf": "Low – the index does the selection",
          "stock": "High – you need to follow results, news and valuation"
        },
        {
          "aspect": "Risk of total loss",
          "etf": "Very low for broad indices",
          "stock": "Real, especially for small and unprofitable companies"
        },
        {
          "aspect": "Upside",
          "etf": "Market return, minus low costs",
          "stock": "Can beat the market – or lag it badly"
        },
        {
          "aspect": "Costs",
          "etf": "Ongoing fee (TER), often around 0.1–0.3% a year for broad ETFs",
          "stock": "No ongoing fee, but trading costs per purchase"
        }
      ],
      "coreSatellite": [
        "Core: one or a few broad, low-cost ETFs (e.g. world or all-world indices) – often the large majority of the portfolio",
        "Satellites: single stocks, themes or small caps – a small share you research yourself and could afford to lose",
        "Rebalance occasionally so the satellites do not quietly become the core"
      ]
    },
    "taxDE": {
      "intro": "Key facts for private investors resident in Germany. Simplified overview – for your own situation, ask a tax adviser.",
      "items": [
        {
          "title": "Capital gains tax (Abgeltungsteuer)",
          "text": "25% on interest, dividends and realised gains, plus 5.5% solidarity surcharge on that tax – 26.375% in total, up to about 28% with church tax. German banks deduct it automatically."
        },
        {
          "title": "Tax-free allowance (Sparerpauschbetrag)",
          "text": "€1,000 per year for singles, €2,000 for married couples. Give your bank an exemption order (Freistellungsauftrag) so it does not deduct tax up to that amount; split it if you have several banks."
        },
        {
          "title": "Partial exemption for equity ETFs (Teilfreistellung)",
          "text": "For equity funds, 30% of income and gains is tax-free (15% for mixed funds). It is applied automatically by German banks."
        },
        {
          "title": "Advance lump-sum tax (Vorabpauschale)",
          "text": "Accumulating ETFs pay out nothing, so a minimum amount is taxed each January based on the Bundesbank base rate. It is capped at the fund's actual gain and credited against the tax when you sell. Keep some cash in the clearing account so the bank can collect it."
        },
        {
          "title": "Losses",
          "text": "Losses from selling shares can only be offset against gains from shares; other losses go into a general loss pot. Banks track this automatically."
        }
      ],
      "source": {
        "label": "biallo.de: Vorabpauschale explained (updated Jan 2026)",
        "url": "https://www.biallo.de/aktienfonds/ratgeber/vorabpauschale/",
        "lang": "DE"
      }
    },
    "checklist": [
      {
        "q": "Do I understand the business?",
        "d": "Can you explain in two sentences how the company makes money?"
      },
      {
        "q": "Is it growing?",
        "d": "Revenue trend over several years, not just one quarter."
      },
      {
        "q": "Does it make money?",
        "d": "Profit and free cash flow – or, if not yet, how long its cash lasts."
      },
      {
        "q": "How much debt?",
        "d": "High debt plus rising interest rates is a dangerous mix."
      },
      {
        "q": "What is the price?",
        "d": "Compare valuation (e.g. P/E, price-to-sales) with peers and its own history."
      },
      {
        "q": "What could go wrong?",
        "d": "Competition, regulation, dependence on one customer or product."
      },
      {
        "q": "Who runs it?",
        "d": "Management track record, insider buying or selling."
      },
      {
        "q": "How big should the position be?",
        "d": "Decide in advance; small for single stocks, smaller still for small caps."
      },
      {
        "q": "Why now, and when would I sell?",
        "d": "Write down your reason and exit conditions before you buy."
      }
    ],
    "smallCaps": {
      "intro": "Small caps (smaller companies, typically below about €2bn market value) and micro caps (much smaller) can grow faster – but most do not, and many fail. How to look at them critically:",
      "green": [
        "Growing revenue over several years, not one lucky quarter",
        "A clear, understandable product with paying customers",
        "Enough cash or profits to fund growth without constant new shares",
        "Management owns shares and has a track record",
        "Regular trading on a regulated exchange with published reports"
      ],
      "red": [
        "Hype on social media, \"next 10x\" promises, unsolicited tips",
        "Very low trading volume or wide bid-ask spreads",
        "Frequent capital increases that dilute existing shareholders",
        "No revenue, only a story – or revenue from one customer",
        "Listed only on unregulated venues, irregular or missing reports",
        "Sudden price spikes without news (possible pump-and-dump)"
      ],
      "sizing": "Many experienced private investors keep any single small cap to a small single-digit share of their portfolio and the whole small-cap bucket limited. Assume any one of them could go to zero."
    }
  },
  "glossary": [
    {"term": "Policy rate", "def": "The interest rate at which banks borrow from the central bank. It influences loan and savings rates and therefore stock markets.", "added": "2026-10-27"},
    {"term": "Index", "def": "A basket of selected stocks whose value tracks the performance of a market – e.g. the DAX with Germany's 40 largest companies."},
    {"term": "DAX", "def": "Germany's best-known stock index, made up of the 40 largest listed companies."},
    {"term": "Xetra", "def": "Deutsche Börse's electronic trading platform, where most German equity trading takes place (core hours 09:00–17:30 CET)."},
    {"term": "Pre-market", "def": "Trading or price indications before the official open. They give a first impression of how the day may start."},
    {"term": "ETF", "def": "Exchange-traded fund that tracks an index as closely as possible. Usually low-cost and broadly diversified."},
    {"term": "MSCI World", "def": "Index of around 1,500 large companies from developed markets. US companies make up the largest share."},
    {"term": "Quarterly results", "def": "Financial figures that listed companies publish every three months. The outlook often matters more than the numbers themselves."},
    {"term": "Guidance / outlook", "def": "What a company expects for the coming months. A guidance cut often leads to sharp share price falls."},
    {"term": "P/E ratio", "def": "Share price divided by earnings per share. Roughly shows how many years of profit you pay for a share."},
    {"term": "Dividend", "def": "The share of profits a company pays out to shareholders. Dividend yield relates it to the share price."},
    {"term": "Bond yield", "def": "The annual return on a bond relative to its price. Rising yields make bonds more attractive compared with stocks."},
    {"term": "Basis point", "def": "One hundredth of a percentage point (0.01%). Rate changes are often quoted in basis points."},
    {"term": "Volatility", "def": "A measure of how strongly a price fluctuates. High volatility means bigger swings up and down."},
    {"term": "Market capitalisation", "def": "A company's stock market value: share price times number of shares."},
    {"term": "Brent", "def": "The main benchmark for crude oil in Europe. Its price affects energy costs and inflation."},
    {"term": "IPO", "def": "Initial public offering – the first time a company sells its shares on a stock exchange."},
    {"term": "Spread", "def": "The difference between the bid and ask price. It is often wider outside core trading hours."}
  ]
};
