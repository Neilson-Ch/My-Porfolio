import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import creditWorkflow from "../assets/portfolio/evidence/credit-workflow.png";
import creditInstance from "../assets/portfolio/evidence/credit-instance.png";
import creditDeploymentCode from "../assets/portfolio/evidence/credit-deployment-code.png";
import creditCloudwatchLogs from "../assets/portfolio/evidence/credit-cloudwatch-logs.png";
import creditFormPrimary from "../assets/portfolio/evidence/credit-form-primary.png";
import creditFormSecondary from "../assets/portfolio/evidence/credit-form-secondary.png";
import creditPredictionOutput from "../assets/portfolio/evidence/credit-prediction-output.png";
import cherryConfusionMatrix from "../assets/portfolio/evidence/cherry-confusion-matrix.png";
import cherryAccuracyCurve from "../assets/portfolio/evidence/cherry-accuracy-curve.png";
import cganGeneratedSamples from "../assets/portfolio/evidence/cgan-generated-samples.png";
import cganLossCurves from "../assets/portfolio/evidence/cgan-loss-curves.png";
import clusteringSilhouette from "../assets/portfolio/evidence/clustering-silhouette.png";
import clusteringPca from "../assets/portfolio/evidence/clustering-pca.png";
import musicCorrelation from "../assets/portfolio/evidence/music-correlation.png";
import musicRecommendOutput from "../assets/portfolio/evidence/music-recommend-output.png";
import salesDashboard from "../assets/portfolio/evidence/sales-dashboard.png";
import forecastVsActual from "../assets/portfolio/evidence/forecast-vs-actual.png";
import shapFeatureImportance from "../assets/portfolio/evidence/shap-feature-importance.png";
import stockGooglHistory from "../assets/portfolio/evidence/stock-googl-history.png";
import stockIntcHistory from "../assets/portfolio/evidence/stock-intc-history.png";
import stockGooglSplit from "../assets/portfolio/evidence/stock-googl-split.png";
import stockIntcSplit from "../assets/portfolio/evidence/stock-intc-split.png";
import stockGooglBaselineLoss from "../assets/portfolio/evidence/stock-googl-baseline-loss.png";
import stockIntcBaselineLoss from "../assets/portfolio/evidence/stock-intc-baseline-loss.png";
import stockGooglModifiedLoss from "../assets/portfolio/evidence/stock-googl-modified-loss.png";
import stockIntcModifiedLoss from "../assets/portfolio/evidence/stock-intc-modified-loss.png";
import stockGooglPredictions from "../assets/portfolio/evidence/stock-googl-predictions.png";
import stockIntcPredictions from "../assets/portfolio/evidence/stock-intc-predictions.png";
import { StockResults } from "../components/stock-results";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neilson Christopher — Data Science Portfolio" },
      { name: "description", content: "Eight data science case studies by Neilson Christopher, spanning machine learning, computer vision, generative modelling, recommendations, demand and stock-price forecasting, and BI." },
      { property: "og:title", content: "Neilson Christopher — Data Science Portfolio" },
      { property: "og:description", content: "Applied machine learning and analytics projects built at BINUS University." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CV_URL = "/CV_Neilson_Christopher.pdf";

async function downloadCV() {
  try {
    const response = await fetch(CV_URL);
    if (!response.ok) throw new Error("fetch failed");
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = "CV_Neilson_Christopher.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(objectUrl);
  } catch {
    window.open(CV_URL, "_blank");
  }
}

const projects = [
  { id: "credit", no: "01", title: "Credit score prediction", field: "MLOps", metric: "Deployed", description: "A machine learning prototype predicting Poor, Standard, or Good credit-score categories from financial and repayment features.", approach: "Compared Random Forest, XGBoost, and CatBoost, logged validation metrics with MLflow, then packaged the model for a SageMaker endpoint.", lesson: "Model packaging, compatible preprocessing, and request formats determine whether an experiment becomes usable software.", tags: "Python · scikit-learn · XGBoost · CatBoost · MLflow · Streamlit · AWS", evidence: [
    { src: creditWorkflow, alt: "Credit score prediction workflow from data preparation through cloud inference", caption: "End-to-end model and deployment flow", featured: true },
    { src: creditInstance, alt: "Cloud instance status showing the credit deployment running", caption: "Running cloud instance" },
    { src: creditDeploymentCode, alt: "Deployment terminal showing the endpoint smoke test response", caption: "Endpoint deployment and smoke test" },
    { src: creditCloudwatchLogs, alt: "CloudWatch application logs showing successful ping requests", caption: "Observable endpoint activity" },
    { src: creditFormPrimary, alt: "First half of the Streamlit credit score input form", caption: "Customer input interface · part 1" },
    { src: creditFormSecondary, alt: "Second half of the Streamlit credit score input form", caption: "Customer input interface · part 2" },
    { src: creditPredictionOutput, alt: "Credit score result showing a Standard prediction and class probabilities", caption: "Predicted class and probabilities", featured: true },
  ] },
  { id: "cherry", no: "02", title: "Cherry leaf disease", field: "Computer vision", metric: "95%", description: "A classifier distinguishing healthy leaves from four disease categories using 3,280 images.", approach: "Prepared the data pipeline and compared an AlexNet baseline with a modified CNN across overall and class-level performance.", lesson: "The baseline misclassified 17 shot-hole examples as healthy, showing why class-level errors matter alongside headline accuracy.", tags: "TensorFlow · Keras · CNN · Classification", evidence: [
    { src: cherryConfusionMatrix, alt: "Confusion matrix for the cherry leaf disease classifier", caption: "Class-level confusion matrix" },
    { src: cherryAccuracyCurve, alt: "Training and validation accuracy curves for the cherry leaf model", caption: "Model accuracy by epoch" },
  ] },
  { id: "cgan", no: "03", title: "Conditional satellite generation", field: "Generative modelling", metric: "101.66 FID", description: "A Conditional GAN generating 28 × 28 grayscale satellite images conditioned on stadium or oil-and-gas-field labels.", approach: "Compared a fully connected model with a convolutional alternative, with both principal models trained for 100 epochs.", lesson: "Image samples, loss curves, and FID provide different evidence; spatial structure improved results with a smaller model.", tags: "TensorFlow · Keras · CGAN · FID", evidence: [
    { src: cganGeneratedSamples, alt: "Generated stadium and oil field satellite image samples", caption: "Convolutional model outputs" },
    { src: cganLossCurves, alt: "Generator and discriminator loss curves for baseline and modified CGAN models", caption: "Baseline and modified loss curves" },
  ] },
  { id: "clustering", no: "04", title: "Crime incident clustering", field: "Unsupervised", metric: "6,574", description: "An exploratory study grouping environmental, demographic, and infrastructure contexts across 6,574 incident records.", approach: "Handled missing values and outliers, selected features, applied clustering, and profiled the resulting groups with PCA support.", lesson: "Check which features drive separation before interpreting clusters; next steps include per-capita features and stability checks.", tags: "Python · pandas · scikit-learn · PCA · K-Means", evidence: [
    { src: clusteringSilhouette, alt: "Silhouette analysis across candidate cluster counts", caption: "Silhouette analysis" },
    { src: clusteringPca, alt: "PCA projection of the crime incident clusters", caption: "K-Means clusters · PCA projection" },
  ] },
  { id: "music", no: "05", title: "Content based music recommendation", field: "Similarity search", metric: "5,000", description: "A notebook prototype supporting artist, album, track, and keyword search in an initial catalogue of 5,000 records.", approach: "Connected metadata cleaning with query handling and recommendation logic, returning ranked song details through one function.", lesson: "Different inputs trigger different branches; future evaluation should add labelled queries, Precision@K, and NDCG@K.", tags: "Python · pandas · TF-IDF · Cosine similarity", evidence: [
    { src: musicCorrelation, alt: "Correlation matrix of music recommendation features", caption: "Audio feature correlation matrix" },
    { src: musicRecommendOutput, alt: "Recommendation results for the query red showing track names, artists, album, and popularity", caption: "Sample output · recommend('red')" },
  ] },
  { id: "sales", no: "06", title: "Starbucks sales dashboard", field: "Business intelligence", metric: "$156.6K", description: "An interactive Tableau view of revenue, order volume, product mix, and purchasing patterns.", approach: "Prepared sales fields, defined calculated measures, and arranged headline metrics with product and time comparisons.", lesson: "Latte led at $37.5K and activity peaked near 10:00, suggesting questions about product availability and staffing.", tags: "Tableau · KPI design · Sales analysis", evidence: [
    { src: salesDashboard, alt: "Starbucks sales dashboard with revenue, product, hourly, and order charts", caption: "Interactive Tableau sales dashboard" },
  ] },
  { id: "forecasting", no: "07", title: "SKU demand forecasting", field: "Time series", metric: "0.618 WRMSSE", description: "A hierarchical demand forecasting pipeline predicting 28-day SKU demand across 30,490 item-store series from the M5 Walmart retail dataset.", approach: "Built leakage-safe lag, rolling, and EWM features, trained LightGBM with direct multi-horizon forecasting, and validated through nested temporal validation against a seasonal-naive baseline.", lesson: "Recent demand history dominated model explanations, temporal validation is critical for forecasting, and a strong baseline makes improvement measurable.", tags: "Python · pandas · NumPy · LightGBM · SHAP · Matplotlib · M5 Forecasting", evidence: [
    { src: forecastVsActual, alt: "Total demand forecast versus actual on the outer holdout, comparing LightGBM with a seasonal-naive baseline", caption: "Forecast vs actual · outer holdout", featured: true },
    { src: shapFeatureImportance, alt: "SHAP feature importance showing 28-day and 91-day EWM demand features as the strongest predictors", caption: "SHAP feature importance" },
  ] },
  { id: "stocks", no: "08", title: "LSTM stock price forecasting", field: "Deep learning", metric: "1.7834% MAPE", description: "A notebook study predicting next-day closing prices for Alphabet (GOOGL) and Intel (INTC) from five trading days of price history, using 3,932 and 10,098 historical records respectively.", approach: "Reserved the final year for testing, split training and validation chronologically, and fitted MinMaxScaler on training only. Compared a 50-unit ReLU LSTM with a 100-unit tanh model using dropout and early stopping.", lesson: "Architecture changes are not universally better: GOOGL MAPE fell from 2.8087% to 1.7834%, while INTC MAPE rose from 1.7539% to 1.8620%. Short-horizon price tracking also needs a persistence baseline before claiming practical forecasting value.", tags: "Python · pandas · NumPy · TensorFlow · Keras · LSTM · scikit-learn · Matplotlib", evidence: [
    { src: stockGooglPredictions, alt: "GOOGL actual closing prices compared with baseline and modified LSTM test predictions", caption: "GOOGL · predictions vs actual", featured: true },
    { src: stockIntcPredictions, alt: "INTC actual closing prices compared with baseline and modified LSTM test predictions", caption: "INTC · predictions vs actual", featured: true },
    { src: stockGooglHistory, alt: "Historical GOOGL closing prices from 2004 to 2020", caption: "GOOGL · historical closing prices" },
    { src: stockIntcHistory, alt: "Historical INTC closing prices from 1980 to 2020", caption: "INTC · historical closing prices" },
    { src: stockGooglSplit, alt: "Chronological GOOGL training data and final-year test split", caption: "GOOGL · train–test split" },
    { src: stockIntcSplit, alt: "Chronological INTC training data and final-year test split", caption: "INTC · train–test split" },
    { src: stockGooglBaselineLoss, alt: "GOOGL baseline LSTM training and validation loss curves", caption: "GOOGL · baseline learning curve" },
    { src: stockIntcBaselineLoss, alt: "INTC baseline LSTM training and validation loss curves", caption: "INTC · baseline learning curve" },
    { src: stockGooglModifiedLoss, alt: "GOOGL modified LSTM training and validation loss curves", caption: "GOOGL · modified learning curve" },
    { src: stockIntcModifiedLoss, alt: "INTC modified LSTM training and validation loss curves", caption: "INTC · modified learning curve" },
  ] },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-ink antialiased">
      <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="font-mono text-sm font-medium">NEILSON·CH</a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 font-mono text-xs uppercase text-mute md:flex">
            <a href="#about" className="transition-colors hover:text-ink">About</a>
            <a href="#index" className="transition-colors hover:text-ink">Index</a>
            <a href="#case-studies" className="transition-colors hover:text-ink">Case studies</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={downloadCV} className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 font-mono text-xs uppercase transition-colors hover:border-accent hover:text-accent md:px-5 md:py-3">
              Download CV <Download aria-hidden="true" className="size-3.5" />
            </button>
            <a href="https://github.com/Neilson-Ch" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-xs uppercase text-paper transition-colors hover:bg-accent">
              GitHub <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1280px] px-5 md:px-8">
        <section className="pb-16 pt-14 md:pt-20">
          <p className="animate-rise font-mono text-xs uppercase text-mute [letter-spacing:0.25em]">Data science · applied ML &amp; analytics</p>
          <h1 className="animate-rise mt-6 font-display text-[4.05rem] uppercase leading-[0.82] sm:text-[7rem] lg:text-[10rem] xl:text-[12rem] [animation-delay:80ms]">
            Neilson<br /><span className="text-accent">Christopher</span>
          </h1>
          <div id="about" className="mt-12 grid gap-8 md:grid-cols-12">
            <div className="animate-rise md:col-span-5 [animation-delay:160ms]">
              <div className="max-w-[68ch] space-y-5 text-lg leading-relaxed">
                <p>I am a Data Science student at BINUS University who enjoys turning technical experiments into something people can understand and use. My interests include predictive modelling, deep learning, explainable AI, and model deployment. I am especially curious about what happens after a model produces a result: how that result is explained, how someone interacts with it, and whether it helps address the problem that led to the project.</p>
                <p>This portfolio presents projects that i have completed. The three data science projects explore prediction, image classification, and image generation. The two interface projects gave me space to work with visual storytelling and the details of a user journey. Together, they show how I am developing both the analytical skills to evaluate a solution and the design awareness to make it usable.</p>
              </div>
              <a href="#index" className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase text-mute transition-colors hover:text-accent">Explore the work <ArrowDown className="size-3.5" /></a>
            </div>
            <div className="animate-rise grid grid-cols-3 gap-px border border-line bg-line md:col-span-7 [animation-delay:240ms]">
              {[[String(projects.length).padStart(2, '0'),'Case studies'],['95%','Best CV accuracy'],['2026','Academic work']].map(([value,label]) => <div key={label} className="bg-background p-4 md:p-5"><p className="font-display text-3xl md:text-4xl">{value}</p><p className="mt-1 font-mono text-[10px] uppercase text-mute md:text-[11px]">{label}</p></div>)}
            </div>
          </div>
        </section>

        <section className="border-t border-line py-14">
          <p className="mb-8 font-mono text-xs uppercase text-mute [letter-spacing:0.25em]">Core toolkit</p>
          <div className="flex flex-wrap gap-2">{['Python','pandas','NumPy','scikit-learn','TensorFlow','Keras','MLflow','Streamlit','AWS','Tableau'].map(tool => <span key={tool} className="rounded-full border border-line px-3 py-2 font-mono text-xs text-mute">{tool}</span>)}</div>
        </section>

        <section id="index" className="border-t border-line py-14">
          <div className="mb-6 flex items-end justify-between"><h2 className="font-display text-4xl uppercase md:text-5xl">Project index</h2><span className="font-mono text-xs text-mute">{String(projects.length).padStart(2, '0')} entries</span></div>
          <div className="divide-y divide-line border-y border-line">
            {projects.map(project => <a key={project.id} href={`#${project.id}`} className="group -mx-2 flex items-center gap-3 px-2 py-6 transition-colors hover:bg-surface/60 md:gap-6"><span className="w-8 font-mono text-sm text-mute">{project.no}</span><span className="flex-1 font-display text-xl uppercase transition-transform group-hover:translate-x-2 md:text-3xl">{project.title}</span><span className="hidden font-mono text-xs text-mute md:block">{project.field}</span><span className="font-mono text-xs text-accent md:text-sm">{project.metric}</span></a>)}
          </div>
        </section>

        <div id="case-studies">
          {projects.map((project, index) => (
            <section id={project.id} key={project.id} className="scroll-mt-20 border-t border-line py-16 md:py-24">
              <div className="grid items-start gap-10 md:grid-cols-12">
                <div className={`min-w-0 md:col-span-6 ${index % 2 ? 'md:order-2' : ''}`}>
                  <div className="mb-5 flex items-center gap-3"><span className="font-mono text-xs text-mute">Case {project.no}</span><span className="h-px flex-1 bg-line"/><span className="font-mono text-xs uppercase text-accent">{project.field}</span></div>
                  <h2 className="font-display text-4xl uppercase leading-[0.92] md:text-6xl">{project.title}</h2>
                  <p className="mt-5 max-w-[54ch] leading-relaxed text-mute">{project.description}</p>
                  <div className="mt-7 grid gap-px border border-line bg-line sm:grid-cols-2">
                    <div className="bg-background p-5"><p className="font-mono text-[11px] uppercase text-mute">Approach</p><p className="mt-2 text-sm leading-relaxed">{project.approach}</p></div>
                    <div className="bg-background p-5"><p className="font-mono text-[11px] uppercase text-mute">What I learned</p><p className="mt-2 text-sm leading-relaxed">{project.lesson}</p></div>
                  </div>
                  <p className="mt-5 font-mono text-[11px] leading-relaxed text-mute">{project.tags}</p>
                  {project.id === 'stocks' && <StockResults />}
                </div>
                <div className={`min-w-0 md:col-span-6 ${index % 2 ? 'md:order-1' : ''}`}>
                   <div className="grid gap-4 sm:grid-cols-2">
                     {project.evidence.map((item, evidenceIndex) => (
                       <figure key={item.caption} className={`overflow-hidden border border-line bg-paper p-3 ${item.featured ? "sm:col-span-2" : ""}`}>
                         <div className={`flex items-center justify-center overflow-hidden bg-surface ${item.featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                           <img src={item.src} alt={item.alt} className="h-full w-full object-contain" loading="lazy" />
                         </div>
                         <figcaption className="mt-3 flex items-start justify-between gap-3 font-mono text-[10px] uppercase text-mute">
                           <span>{item.caption}</span><span className="shrink-0">{project.no}.{String(evidenceIndex + 1).padStart(2, "0")}</span>
                         </figcaption>
                       </figure>
                     ))}
                   </div>
                  {project.id === 'cherry' && <div className="mt-5 border border-line bg-paper p-6"><p className="font-mono text-[11px] uppercase text-mute">Classification accuracy</p><div className="mt-4 space-y-4">{[['Modified CNN','95%','w-[95%] bg-accent'],['AlexNet baseline','87%','w-[87%] bg-ink/40']].map(([name,value,width]) => <div key={name}><div className="mb-1.5 flex justify-between font-mono text-xs"><span>{name}</span><span>{value}</span></div><div className="h-2.5 overflow-hidden rounded-full bg-line"><div className={`animate-fill h-full origin-left ${width}`} /></div></div>)}</div><p className="mt-4 font-mono text-[11px] text-mute">Recorded on 492 test images</p></div>}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="border-t border-line py-16 md:py-24"><div className="grid items-center gap-10 md:grid-cols-12"><h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] uppercase leading-[0.9] md:col-span-8">Interested in careful analysis and useful software?</h2><div className="md:col-span-4 md:text-right"><div className="flex flex-wrap items-center gap-3 md:justify-end"><a href="https://github.com/Neilson-Ch" target="_blank" rel="noreferrer" className="inline-flex max-w-full items-center gap-3 rounded-full bg-accent px-6 py-5 font-display text-lg uppercase text-paper transition-colors hover:bg-accent-deep md:px-8 md:text-xl">View GitHub <ArrowUpRight className="size-5" /></a><button onClick={downloadCV} className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-4 font-mono text-xs uppercase transition-colors hover:border-accent hover:text-accent md:px-7 md:py-5 md:text-sm">Download CV <Download aria-hidden="true" className="size-4" /></button></div><p className="mt-4 font-mono text-xs text-mute">Repositories, notebooks &amp; walkthroughs</p></div></div></section>
      </main>

      <footer className="border-t border-line"><div className="mx-auto flex min-h-14 max-w-[1280px] flex-wrap items-center justify-between gap-2 px-5 py-4 font-mono text-xs text-mute md:px-8"><span>© 2026 Neilson Christopher</span><span>BINUS University · Jakarta</span></div></footer>
    </div>
  );
}
