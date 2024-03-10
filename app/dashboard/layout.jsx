import DashboardNav from "@/components/layout/DashboardNav";

export default function DashboardLayout({ children }) {
	return (
		<div
			className="
		overflow-hidden
		pt-24 px-8 sm:px-20 md:px-32 lg:px-60
		flex flex-col gap-4 h-min"
		>
			<DashboardNav />
			{children}
		</div>
	);
}
