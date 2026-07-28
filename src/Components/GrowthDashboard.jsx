import { motion } from "framer-motion"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

// Placeholder data — replace dataPoints with real monthly metrics per
// client once supplied.
const results = [
    {
        clientName: "Maharaj Wholesale",
        metricLabel: "Followers",
        dataPoints: [
            { label: "Jan", value: 500 },
            { label: "Feb", value: 1800 },
            { label: "Mar", value: 4200 },
            { label: "Apr", value: 9000 },
            { label: "May", value: 12500 },
        ],
    },
    {
        clientName: "Peehus Rasoi",
        metricLabel: "Engagement Rate (%)",
        dataPoints: [
            { label: "Jan", value: 1.2 },
            { label: "Feb", value: 2.1 },
            { label: "Mar", value: 3.4 },
            { label: "Apr", value: 5.0 },
            { label: "May", value: 6.8 },
        ],
    },
    {
        clientName: "The Kidszone",
        metricLabel: "Monthly Enquiries",
        dataPoints: [
            { label: "Jan", value: 30 },
            { label: "Feb", value: 120 },
            { label: "Mar", value: 400 },
            { label: "Apr", value: 900 },
            { label: "May", value: 1600 },
        ],
    },
]

function GrowthCard({ result, index }) {
    return (
        <motion.div
            className="rounded-2xl border border-border bg-foreground/5 p-5 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-base font-semibold">{result.clientName}</div>
            <div className="text-xs text-foreground/70">{result.metricLabel}</div>
            <div className="mt-4 h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={result.dataPoints}>
                        <XAxis dataKey="label" stroke="var(--muted-foreground)" fontSize={12} />
                        <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "0.5rem" }}
                        />
                        <Line type="monotone" dataKey="value" stroke="var(--brand-saffron)" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    )
}

export function GrowthDashboard() {
    return (
        <section id="growth-dashboard" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Client Growth Results">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Real Results, Real <span className="text-[var(--brand-green)]">Growth</span>
                </motion.h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {results.map((result, i) => (
                        <GrowthCard key={result.clientName} result={result} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
