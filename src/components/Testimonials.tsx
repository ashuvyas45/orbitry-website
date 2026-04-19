"use client";

const reviews = [
  { domain: "gymshark.com", rating: 4.9, quote: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of features.", author: "Sanjay Sharma", handle: "voracious_rainbows_68" },
  { domain: "allbirds.com", rating: 5.0, quote: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable partner.", author: "Samantha Johnson", handle: "CEO and Co-founder of ABC Company" },
  { domain: "glossier.com", rating: 4.9, quote: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.", author: "Isabella Rodriguez", handle: "CEO and Co-founder of ABC Company" },
  { domain: "skims.com", rating: 4.8, quote: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.", author: "Gabrielle Williams", handle: "CEO and Co-founder of ABC Company" },
  { domain: "drinkolipop.com", rating: 5.0, quote: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.", author: "Victoria Thompson", handle: "CEO and Co-founder of ABC Company" },
  { domain: "fentybeauty.com", rating: 4.9, quote: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.", author: "John Peter", handle: "CEO and Co-founder of ABC Company" },
  { domain: "fashionnova.com", rating: 5.0, quote: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.", author: "Natalie Martinez", handle: "CEO and Co-founder of ABC Company" },
  { domain: "chubbiesshorts.com", rating: 4.8, quote: "One of the best decisions we made was installing this. The integration is seamless and it instantly improved AOV.", author: "Daniel Roberts", handle: "CEO and Co-founder of ABC Company" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5 text-gray-900 font-bold">
      <span className="text-sm">{rating.toFixed(1)}</span>
      <svg className="h-4 w-4 text-[#10b981] fill-[#10b981]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.07.208a.75.75 0 001.07.296h.227c.918 0 1.314 1.115.573 1.627a2.404 2.404 0 001.088.792l.205.07c.921.3.921 1.603 0 1.902l-.208.07a.75.75 0 00-.296 1.07v.227c0 1.918-1.115 1.314-1.627.573a2.404 2.404 0 00-.792 1.088l-.07.205c-.3.921-1.603.921-1.902 0l-.07-.208a.75.75 0 00-1.07-.296h-.227c-.918 0-1.314-1.115-.573-1.627a2.404 2.404 0 00-1.088-.792l-.205-.07c-.921-.3-.921-1.603 0-1.902l.208-.07a.75.75 0 00.296-1.07v-.227c0-1.918 1.115-1.314 1.627-.573a2.404 2.404 0 00.792-1.088l.07-.205z" />
      </svg>
    </div>
  );
}

export default function Testimonials() {
  const row1 = reviews.slice(0, 4);
  const duplicatedRow1 = [...row1, ...row1, ...row1];

  const row2 = reviews.slice(4, 8);
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-32 pb-40" id="testimonials">
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center relative z-20">
          <h2 className="mb-6 font-serif text-[2.5rem] font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Words of praise from others<br/>about our presence.
          </h2>
        </div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col gap-6">
        {/* Top/Bottom Fade Masks for clean Marquee Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 md:w-40 bg-gradient-to-r from-[#fafafa] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 md:w-40 bg-gradient-to-l from-[#fafafa] to-transparent" />

        {/* Row 1: Moves Left */}
        <div className="relative flex overflow-hidden w-full py-4 min-h-[300px]">
          <div className="animate-marquee-left flex items-stretch gap-6 pr-6 w-max">
            {duplicatedRow1.map((item, i) => (
              <div 
                key={i} 
                className="w-[350px] md:w-[420px] flex-shrink-0 flex flex-col justify-between rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between min-h-[24px]">
                    <div className="flex w-32 items-center justify-start">
                      <img src={`https://logo.clearbit.com/${item.domain}`} className="h-6 w-auto object-contain" alt="" onError={(e) => (e.currentTarget.style.opacity = '0')} />
                    </div>
                    <StarRating rating={item.rating} />
                  </div>
                  <p className="mb-8 text-[15px] md:text-base leading-relaxed text-gray-600">
                    "{item.quote}"
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{item.author}</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">{item.handle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="relative flex overflow-hidden w-full py-4 min-h-[300px]">
          {/* Apply a negative margin or translation if desired, but animate-marquee-right will handle the -50 to 0 motion */}
          <div className="animate-marquee-right flex items-stretch gap-6 pr-6 w-max">
            {duplicatedRow2.map((item, i) => (
               <div 
                key={i} 
                className="w-[350px] md:w-[420px] flex-shrink-0 flex flex-col justify-between rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between min-h-[24px]">
                    <div className="flex w-32 items-center justify-start">
                      <img src={`https://logo.clearbit.com/${item.domain}`} className="h-6 w-auto object-contain" alt="" onError={(e) => (e.currentTarget.style.opacity = '0')} />
                    </div>
                    <StarRating rating={item.rating} />
                  </div>
                  <p className="mb-8 text-[15px] md:text-base leading-relaxed text-gray-600">
                    "{item.quote}"
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{item.author}</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">{item.handle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}